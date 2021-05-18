import React, { useRef } from 'react';
import styles from './Slider.module.css';

const Slider = ({onSetTabIndex}) => {

  const inputRef = useRef(null)

  const indicateChange = () => {
    onSetTabIndex(inputRef.current.value)
  };

  return (
    <div className={styles.Slider} >
      <input
        onChange={indicateChange}
        ref={inputRef}
        type={`range`}
        min={`0`}
        max={`2`}
        step={`1`}
        defaultValue={`0`}
      />
    </div>
  );
};

export default Slider;
