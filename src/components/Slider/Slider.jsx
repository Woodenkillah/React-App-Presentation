import React, { useRef } from 'react';
import styles from './Slider.module.css';
import { FIRST_SLIDE_INDEX, SLIDE_STEP_INDEX, DEFAULT_SLIDE_VALUE } from '../../constants';

const Slider = ({onSetActiveSlide, lastSlideIndex}) => {

  const inputRef = useRef(null);

  const slideChangeHandler = () => {
    onSetActiveSlide(inputRef.current.value)
  };

  return (
    <div className={styles.Slider} >
      <input
        onChange={slideChangeHandler}
        ref={inputRef}
        type={`range`}
        min={FIRST_SLIDE_INDEX}
        max={lastSlideIndex}
        step={SLIDE_STEP_INDEX}
        defaultValue={DEFAULT_SLIDE_VALUE}
      />
      <div className={styles.year_1988}>1988</div>
      <div className={styles.year_2009}>2009</div>
      <div className={styles.year_2016}>2016</div>
    </div>
  );
};

export default Slider;
