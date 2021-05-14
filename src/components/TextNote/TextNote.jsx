import React from 'react';
import styles from './TextNote.module.css';

const TextNote = ({containerStyle, number, text}) => {

  return (
    <div style={containerStyle} className={styles.TextNote}>
      <p className={styles.pic_num}>{number}</p>
      <p className={styles.pic_text}>{text}</p>
    </div>
  );
};

export default TextNote;
