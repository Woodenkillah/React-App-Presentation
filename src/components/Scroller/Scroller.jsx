import React from 'react';
import styles from './Scroller.module.css';

const Scroller = ({setActivePage, secondPage}) => {

    const scrollDownHandler = () => {

        setActivePage(secondPage)

        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: `smooth`
        });
    };

    return (
        <div className={styles.Scroller} onClick={scrollDownHandler}>
            <div>
                <p>Листайте вниз</p>
                <div className={styles.arrow}></div>
            </div>
        </div>
    );
};

export default Scroller;
