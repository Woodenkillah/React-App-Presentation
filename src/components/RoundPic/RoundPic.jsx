import React from 'react';
import styles from './RoundPic.module.css';

const RoundPic = ({
    imgSrc,
    imgStyle,
    containerStyle,
    textStyle,
    text,
    number
}) => {

    return (
        <div style={containerStyle} className={styles.RoundPic}>
            <img src={imgSrc} style={imgStyle}/>
            <div style={textStyle}>
                <p className={styles.pic_num}>{number}</p>
                <p className={styles.pic_text}>{text}</p>
            </div>
        </div>
    );
};

export default RoundPic;
