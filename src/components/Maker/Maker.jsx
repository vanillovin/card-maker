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
      company: 'SS',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'vanillovin@gmail.com',
      message: 'go for it',
      fileName: 'ming',
      fileURL: '',
    },
    {
      id: 2,
      name: 'Ming2',
      company: 'S',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'vanillovin@gmail.com',
      message: 'go for it',
      fileName: 'ming2',
      fileURL: '',
    },
    {
      id: 3,
      name: 'Ming3',
      company: 'A',
      theme: 'light',
      title: 'Software Engineer',
      email: 'vanillovin@gmail.com',
      message: 'go for it',
      fileName: 'ming3',
      fileURL: '',
    },
  ]);
  const navigate = useNavigate();

  const onLogout = () => authService.logout();

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    })
  }, []);

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
