import React, { useEffect } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Login.module.css';

const Login = ({ authService }) => {
  // const navigate = useNavigate();
  // const goToMaker = userId => {
  //   navigate('/maker', { state: { id: userId }});
  // };

  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => console.log);
  };

  // useEffect(() => {
  //   authService.onAuthChange(user => {
  //     user && goToMaker(user.id);
  //   });
  // });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
