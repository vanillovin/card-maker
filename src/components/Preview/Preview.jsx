import React from 'react';
import Card from '../Card/Card';

import styles from './Preview.module.css';

const Preview = ({ cards, deleteCard }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} deleteCard={deleteCard} />
      ))}
    </ul>
  </section>
);

export default Preview;
