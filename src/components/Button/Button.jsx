import React, { memo } from 'react';
import styles from './Button.module.css';

const Button = memo(({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
));

export default Button;
