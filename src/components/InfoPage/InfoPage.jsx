import React from 'react';
import styles from './InfoPage.module.css';
import Info1988 from '../Info1988/Info1988';
import Info2009 from '../Info2009/Info2009';
import Info2016 from '../Info2016/Info2016';

const InfoPage = () => {

    return (
        <div className={styles.InfoPage}>
            <Info1988 />
            {/* <Info2009 /> */}
            {/* <Info2016 /> */}
        </div>
    );
};

export default InfoPage;
