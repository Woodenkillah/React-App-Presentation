import React from 'react';
import styles from './Info2009.module.css';
import RoundPic from '../RoundPic/RoundPic';
import Arrow from '../Arrow/Arrow';
import {ROUND_PIC_SETS} from '../../roundedImgsData';
import {ARROW_SETS} from '../../arrowsData';

const Info2009 = () => {

    const {SET_2009} = ROUND_PIC_SETS;
    const {ARROW_SET_2009} = ARROW_SETS;

    const imgList = SET_2009.map((item, index) => {
        return (
            <RoundPic 
                key={`img-${index}`}
                imgSrc={item.imgSrc}
                imgStyle={item.imgStyle}
                containerStyle={item.containerStyle}
                textStyle={item.textStyle}
                text={item.text}
                number={item.number}
            />
        )
    });

    const arrowsList = ARROW_SET_2009.map((item, index) => {
        return (
            <Arrow 
                key={`arr-${index}`}
                arrowSrc={item.arrowSrc}
                arrowStyle={item.arrowStyle}
            />
        )
    });

    return (
        <div className={styles.Info2009}>
          <h2>Смертельный октет</h2>
          <div className={styles.ice_large}/>
          <div className={styles.ice_med}/>
          <div className={styles.ice_small}/>
          <div className={styles.info}>
            <p className={styles.info_text}>Гипергликемия</p>
            { imgList }
            { arrowsList }
          </div>
        </div>
    );
};

export default Info2009;
