import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Editor from '../Editor/Editor';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import styles from './Maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const onLogout = useCallback(() => authService.logout(), [authService]);

  useEffect(() => {
    if (!userId) return;
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    // Unmount 컴포넌트를 더 이상 보여주지 않을 때 마지막으로 마무리
    // 여기서 어떤 함수를 리턴하면 리액트가 알아서 컴포넌트가 Unmount 되었을 때 이 함수를 호출해 줘서
    // 리소스나 메모리를 정리하는 등의 일을 해줄 수 있음
    // 컴포넌트가 Unmount 되었을 때 불필요한 네트워크 사용을 최소화
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [authService, userId, navigate]);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
