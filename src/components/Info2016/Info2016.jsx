import React from 'react';
import styles from './Info2016.module.css';
import RoundPic from '../RoundPic/RoundPic';
import TextNote from '../TextNote/TextNote';
import Arrow from '../Arrow/Arrow';
import {ROUND_PIC_SETS} from '../../roundedImgsData';
import {COMPLEX_NOTES} from '../../complexNotesData';
import {ARROW_SETS} from '../../arrowsData';

const Info2016 = () => {

    const {SET_2016} = ROUND_PIC_SETS;
    const {ARROW_SET_2016} = ARROW_SETS;

    const imgList = SET_2016.map((item, index) => {
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

    const notesList = COMPLEX_NOTES.map((item, index) => {
        return (
            <TextNote 
                key={`nt-${index}`}
                containerStyle={item.containerStyle}
                text={item.text}
                number={item.number}
            />
        )
    });

    const arrowsList = ARROW_SET_2016.map((item, index) => {
        return (
            <Arrow 
                key={`arr-${index}`}
                arrowSrc={item.arrowSrc}
                arrowStyle={item.arrowStyle}
            />
        )
    });

    return (
        <div className={styles.Info2016}>
          <h2>Звенья патогенеза СД2</h2>
          <div className={styles.ice_large}/>
          <div className={styles.ice_med}/>
          <div className={styles.ice_small}/>
          <div className={styles.info}>
            <p className={styles.info_text}>Гипергликемия</p>
            { imgList }
            { notesList }
            { arrowsList }
          </div>
          <div className={styles.board}>
            <p>Инсулинорезистентность</p>
          </div>
        </div>
    );
};

export default Info2016;
