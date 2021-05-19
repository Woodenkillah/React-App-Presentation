import React, { useState, useEffect } from 'react';
import styles from './InfoPage.module.css';
import SlidesHolder from '../SlidesHolder/SlidesHolder';
import Info1988 from '../Info1988/Info1988';
import Info2009 from '../Info2009/Info2009';
import Info2016 from '../Info2016/Info2016';
import Slider from '../Slider/Slider';
import { FIRST_SLIDE_INDEX } from '../../constants';

const InfoPage = () => {

  const [activeSlide, setActiveSlide] = useState(FIRST_SLIDE_INDEX);
  const [lastSlideIndex, setLastSlideIndex] = useState(2)

  return (
    <div className={styles.InfoPage}>
      <SlidesHolder
        activeSlide={activeSlide}
        onSetLastSlideIndex={setLastSlideIndex}
      >
        <Info1988 />
        <Info2009 />
        <Info2016 />
      </SlidesHolder>
      <Slider
        activeSlide={activeSlide}
        onSetActiveSlide={setActiveSlide}
        lastSlideIndex={lastSlideIndex}
      />
    </div>
  );
};

export default InfoPage;
