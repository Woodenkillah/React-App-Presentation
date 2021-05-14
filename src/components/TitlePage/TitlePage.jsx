import React from 'react';
import styles from './TitlePage.module.css';
import RoundPoint from '../RoundPoint/RoundPoint';
import {ROUND_POINT_SETS} from '../../roundedImgsData';

const TitlePage = () => {

    return (
        <div className={styles.TitlePage}>
            <h1>Всегда ли цели терапии СД2 <br/>на поверхности?</h1>
            <RoundPoint roundStyle={ROUND_POINT_SETS.AIM} />
            <RoundPoint roundStyle={ROUND_POINT_SETS.HYPO} />
            <RoundPoint roundStyle={ROUND_POINT_SETS.COMP} />
            <RoundPoint roundStyle={ROUND_POINT_SETS.RISKS} />
        </div>
    );
};

export default TitlePage;
