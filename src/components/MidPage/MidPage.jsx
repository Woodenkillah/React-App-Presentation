import React from 'react';
import styles from './MidPage.module.css';

const MidPage = () => {

    return (
        <div className={styles.MidPage}>
            <h1>Основа терапии — <br/> патогенез СД2</h1>
            <div className={styles.ice_large}/>
            <div className={styles.ice_med}/>
            <div className={styles.ice_small}/>
            <div className={styles.ice_tiny}/>
        </div>
    );
};

export default MidPage;
