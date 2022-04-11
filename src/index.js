import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';

const container = document.getElementById('root');
const root = createRoot(container);

const authService = new AuthService(firebaseApp);

root.render(
  <App
    authService={authService}
  />
);
