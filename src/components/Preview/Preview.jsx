import React from 'react';
import Card from '../Card/Card';

import styles from './Preview.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {cards.map(card => <Card key={card.id} {...card} />)}
    </ul>
  </section>
);

export default Preview;
