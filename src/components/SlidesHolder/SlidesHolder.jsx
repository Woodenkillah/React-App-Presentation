import React, { useEffect } from 'react';
import styles from './SlidesHolder.module.css';

const SlidesHolder = ({
  children,
  activeSlide,
  onSetLastSlideIndex,
  sliderStep
}) => {

  const childrenSlides = React.Children.toArray(children);
  const slidesAmount = childrenSlides.length;

  useEffect(() => {
    onSetLastSlideIndex(slidesAmount - 1);
  });

  const screenPositionStyle = {
    transform: `translateX(${-sliderStep * activeSlide}px)`,
    width: `${sliderStep * slidesAmount}px`
  };

  return (
    <div style={screenPositionStyle} className={styles.SlidesHolder}>

      { childrenSlides }

    </div>
  );
};

export default SlidesHolder;
