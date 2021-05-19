import React from 'react';
import styles from './Scroller.module.css';
import { SECOND_PAGE_INDEX } from '../../constants';

const Scroller = ({onSetActivePage, onSetLocalStorage}) => {

    const scrollDownHandler = () => {

        onSetLocalStorage(SECOND_PAGE_INDEX)
        onSetActivePage(JSON.parse(localStorage.getItem(`currentActivePage`)))

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
