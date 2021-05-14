import React from 'react';
import styles from './Arrow.module.css';

const Arrow = ({arrowSrc, arrowStyle}) => {

    return (
      <img 
        src={arrowSrc}
        style={arrowStyle}
        className={styles.Arrow}
      />
    )
};

export default Arrow;
