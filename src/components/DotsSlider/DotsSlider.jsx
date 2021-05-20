import React from 'react';
import styles from './DotsSlider.module.css';
import { CURRENT_ACTIVE_PAGE_KEY } from '../../constants';

const DotsSlider = ({ 
  emptyDotsList,
  activePage,
  onSetActivePage,
  onSetLocalStorage
}) => {

  const scrollHandler = (pageIndex) => () => {

    onSetLocalStorage(pageIndex);
    onSetActivePage(JSON.parse(localStorage.getItem(CURRENT_ACTIVE_PAGE_KEY)));

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
