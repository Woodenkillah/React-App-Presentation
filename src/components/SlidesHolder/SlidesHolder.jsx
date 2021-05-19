import React, {useEffect} from 'react';
import styles from './SlidesHolder.module.css';

const SlidesHolder = ({ children, activeSlide, onSetLastSlideIndex }) => {

  const childrenSlides = React.Children.toArray(children);
  const slidesAmount = childrenSlides.length;
  
  useEffect(() => {
    onSetLastSlideIndex(slidesAmount - 1);
  });

  const slidesRollStep = document.documentElement.clientWidth;

  const screenPositionStyle = {
    transform: `translateX(${-slidesRollStep * activeSlide}px)`,
    width: `${100 * slidesAmount}%`
  };

  return (
    <div style={screenPositionStyle} className={styles.SlidesHolder}>

      { childrenSlides }

    </div>
  );
};

export default SlidesHolder;
