import React, { useState } from 'react';
import styles from './InfoPage.module.css';
import TabsHolder from '../TabsHolder/TabsHolder';
import Info1988 from '../Info1988/Info1988';
import Info2009 from '../Info2009/Info2009';
import Info2016 from '../Info2016/Info2016';
import Slider from '../Slider/Slider';

const InfoPage = () => {

    const TAB_STEP_INDEX = 0;

    const [tabIndex, setTabIndex] = useState(TAB_STEP_INDEX);

    console.log(tabIndex)

    return (
        <div className={styles.InfoPage}>
            <TabsHolder tabIndex={tabIndex}>
                <Info1988 />
                <Info2009 />
                <Info2016 />
            </TabsHolder>
            <Slider onSetTabIndex={setTabIndex}/>
        </div>
    );
};

export default InfoPage;
