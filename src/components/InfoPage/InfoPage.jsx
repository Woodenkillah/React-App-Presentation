import React, { useState, useRef, useEffect } from 'react';
import styles from './InfoPage.module.css';
import SlidesHolder from '../SlidesHolder/SlidesHolder';
import Info1988 from '../Info1988/Info1988';
import Info2009 from '../Info2009/Info2009';
import Info2016 from '../Info2016/Info2016';
import Slider from '../Slider/Slider';
import { FIRST_SLIDE_INDEX } from '../../constants';

const InfoPage = () => {

  const [activeSlide, setActiveSlide] = useState(FIRST_SLIDE_INDEX);
  const [lastSlideIndex, setLastSlideIndex] = useState(``);
  const [sliderStep, setSliderStep] = useState(``);

  const divRef = useRef(``);

  useEffect(() => {
    setSliderStep(divRef.current.offsetWidth)
  });

  return (
    <div ref={divRef} className={styles.InfoPage}>
      <SlidesHolder
        activeSlide={activeSlide}
        onSetLastSlideIndex={setLastSlideIndex}
        sliderStep={sliderStep}
      >
        <Info1988 />
        <Info2009 />
        <Info2016 />
      </SlidesHolder>
      <Slider
        onSetActiveSlide={setActiveSlide}
        lastSlideIndex={lastSlideIndex}
      />
    </div>
  );
};

export default InfoPage;
