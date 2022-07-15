import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate('/maker', { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  const onSubmit = async (newAccount, email, password) => {
    try {
      let data;
      if (newAccount) {
        data = await authService.emailSignIn(email, password);
        console.log('create newAccount data', data);
      } else {
        data = await authService.emailLogin(email, password);
        console.log('log in data', data);
      }
      goToMaker(data.user.uid);
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage);
    } finally {
      // console.log('finally');
    }
  };

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1 className={styles.title}>로그인</h1>
        <AuthForm onSubmit={onSubmit} />
        <h2 className={styles.text}>소셜 로그인</h2>
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
