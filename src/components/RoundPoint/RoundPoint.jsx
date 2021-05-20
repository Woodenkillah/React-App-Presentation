import React from 'react';
import styles from './RoundPoint.module.css';

const RoundPoint = ({roundStyle}) => {

  const {containerStyles, textStyles, text} = roundStyle;

    return (
        <div className={styles.RoundPoint} style={containerStyles}>
          <div>
            <p style={textStyles}>{text}</p>
          </div>          
        </div>
    );
};

export default RoundPoint;
