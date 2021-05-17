import React from 'react';
import styles from './DotsSlider.module.css';

const DotsSlider = ({ 
  emptyDotsList,
  activePage,
  setActivePage,
  setLocalStorage
}) => {

  const scrollHandler = (pageIndex) => () => {

    setLocalStorage(pageIndex);
    setActivePage(JSON.parse(localStorage.getItem(`currentActivePage`)));

    window.scrollTo({
      top: document.documentElement.clientHeight * pageIndex,
      behavior: `smooth`
    });
  };

  const dotsList = emptyDotsList.map((_item, index) => {
    return (
      <div
        key={`dot-${index}`}
        onClick={scrollHandler(index)}
        style={{
          backgroundColor:
            index === activePage
              ? `rgb(255,153,51)`
              : `rgb(255,255,255)`
        }}
      />
    )
  });

  return (
    <div className={styles.DotsSlider}>
      <div className={styles.dots}>
        {dotsList}
      </div>
    </div>
  );
};

export default DotsSlider;
