import React from 'react';
import CardAddForm from '../CardAddForm/CardAddForm';
import CardEditForm from '../CardEditForm/CardEditForm';

import styles from './Editor.module.css';

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <CardEditForm key={card.id} card={card} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
