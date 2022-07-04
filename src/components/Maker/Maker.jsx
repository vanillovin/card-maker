import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../Editor/Editor';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import styles from './Maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Ming',
      company: 'A',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'vanillovin@gmail.com',
      message: 'go for it',
      fileName: 'ming',
      fileURL: '',
    },
    {
      id: 2,
      name: 'Haru',
      company: 'B',
      theme: 'light',
      title: 'Software Engineer',
      email: 'haru@email.com',
      message: 'mew',
      fileName: 'haru',
      fileURL: '',
    },
    {
      id: 3,
      name: 'Harang',
      company: 'C',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'harang@email.com',
      message: 'meow',
      fileName: 'harang',
      fileURL: '',
    },
  ]);
  const navigate = useNavigate();

  const onLogout = () => authService.logout();

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) navigate('/');
    });
  }, []);

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
