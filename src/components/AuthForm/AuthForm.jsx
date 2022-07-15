import React, { useState } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = ({ onSubmit }) => {
  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginInputs;
  const [newAccount, setNewAccount] = useState(true);

  const onChange = ({ target: { name, value } }) =>
    setLoginInputs({
      ...loginInputs,
      [name]: value,
    });

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newAccount, email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className={styles.authInput}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={6}
          value={password}
          onChange={onChange}
          className={styles.authInput}
        />
        <input
          type="submit"
          className={`${styles.authInput} ${styles.authSubmit}`}
          value={newAccount ? '가입하기' : '로그인'}
        />
      </form>
      <span onClick={toggleAccount} className={styles.authSwitch}>
        {newAccount ? '로그인하러 가기' : '이메일로 가입하기'}
      </span>
    </>
  );
};

export default AuthForm;
