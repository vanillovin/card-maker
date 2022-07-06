import React, { useRef, useState } from 'react';
import styles from './ImageFileInput.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    console.log('onChange event.target.files[0]', event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    console.log('onChange uploaded', uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {loading ? (
        <div className={styles.loading}></div>
      ) : (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'}
        </button>
      )}
    </div>
  );
};

export default ImageFileInput;
