import React, { useState, useEffect } from 'react';
import styles from './PagesHolder.module.css';
import DotsSlider from '../DotsSlider/DotsSlider';
import Scroller from '../Scroller/Scroller';
import { FIRST_PAGE_INDEX, SECOND_PAGE_INDEX, PAGE_STEP_INDEX } from '../../constants';

const PagesHolder = ({ children }) => {

  const childrenPages = React.Children.toArray(children);
  const emptyDotsList = new Array(childrenPages.length).fill(``);

  const lastPageIndex = childrenPages.length - 1;

  const [activePage, setActivePage] = useState(``);

  const setLocalStorage = currentActivePage => {
    localStorage.setItem(`currentActivePage`, JSON.stringify(currentActivePage));
  };

  useEffect(() => {

    if (!JSON.parse(localStorage.getItem(`currentActivePage`))) {
      setLocalStorage(FIRST_PAGE_INDEX);
    }

    setActivePage(JSON.parse(localStorage.getItem(`currentActivePage`)));

  }, [JSON.parse(localStorage.getItem(`currentActivePage`))]);

  useEffect(() => {

    const wheelScrollHandler = (evt) => {
      const screenRollStep = document.documentElement.clientHeight;

      if (evt.deltaY > 0 && activePage !== lastPageIndex) {
        window.scrollTo({
          top: screenRollStep * (activePage + PAGE_STEP_INDEX),
          behavior: `smooth`
        });

        setLocalStorage(activePage + PAGE_STEP_INDEX);
        setActivePage(JSON.parse(localStorage.getItem(`currentActivePage`)));

      } else if (evt.deltaY < 0 && activePage !== FIRST_PAGE_INDEX) {
        window.scrollTo({
          top: screenRollStep * (activePage - PAGE_STEP_INDEX),
          behavior: `smooth`
        });

        setLocalStorage(activePage - PAGE_STEP_INDEX);
        setActivePage(JSON.parse(localStorage.getItem(`currentActivePage`)));
      }
    };

    window.addEventListener('mousewheel', wheelScrollHandler);

    return () => {
      window.removeEventListener('mousewheel', wheelScrollHandler);
    };

  });

  return (
    <div className={styles.PagesHolder}>

      { childrenPages}

      {
        childrenPages.length > 1
        && (
          <DotsSlider
            emptyDotsList={emptyDotsList}
            activePage={activePage}
            onSetActivePage={setActivePage}
            onSetLocalStorage={setLocalStorage}
          />
        )
        || null
      }

      {
        childrenPages[SECOND_PAGE_INDEX]
        && (
          <Scroller
            onSetActivePage={setActivePage}
            onSetLocalStorage={setLocalStorage}
          />
        )
        || null
      }

    </div>
  );
};

export default PagesHolder;
