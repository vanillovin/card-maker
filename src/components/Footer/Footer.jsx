import React, { memo } from 'react';
import styles from './Footer.module.css';

const Footer = memo(() => (
  <footer className={styles.footer}>
    <a href="https://github.com/vanillovin/card-maker" className={styles.title}>
      github @vanillovin
    </a>
  </footer>
));

export default Footer;
