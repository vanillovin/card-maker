import React, { memo } from 'react';
import { createRoot } from 'react-dom/client';
import './index.module.css';
import App from './App';
import { firebaseApp } from './service/firebase';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/ImageFileInput/ImageFileInput';
import CardRepository from './service/card_repository';

const container = document.getElementById('root');
const root = createRoot(container);

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

root.render(
  <App
    authService={authService}
    FileInput={FileInput}
    cardRepository={cardRepository}
  />
);
