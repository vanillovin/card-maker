import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/Login/Login';
import Maker from './components/Maker/Maker';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
