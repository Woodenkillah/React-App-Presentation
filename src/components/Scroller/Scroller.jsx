import React from 'react';
import styles from './Scroller.module.css';
import { SECOND_PAGE_INDEX, CURRENT_ACTIVE_PAGE_KEY } from '../../constants';

const Scroller = ({onSetActivePage, onSetLocalStorage}) => {

    const scrollDownHandler = () => {

        onSetLocalStorage(SECOND_PAGE_INDEX)
        onSetActivePage(JSON.parse(localStorage.getItem(CURRENT_ACTIVE_PAGE_KEY)))

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
