import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/ImageFileInput/ImageFileInput';

const container = document.getElementById('root');
const root = createRoot(container);

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

root.render(<App authService={authService} FileInput={FileInput} />);
