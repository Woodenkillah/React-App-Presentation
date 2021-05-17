import React, { useState, useEffect } from 'react';
import styles from './PagesHolder.module.css';
import DotsSlider from '../DotsSlider/DotsSlider';
import Scroller from '../Scroller/Scroller';
import { FIRST_PAGE_INDEX, SECOND_PAGE_INDEX, PAGE_INDEX_STEP } from '../../constants';

const PagesHolder = ({ children }) => {

  const childrenPages = React.Children.toArray(children);
  const emptyDotsList = new Array(childrenPages.length).fill(``);

  const lastPageIndex = childrenPages.length - 1;

  const [activePage, setActivePage] = useState(FIRST_PAGE_INDEX);

  const setLocalStorage = currentActivePage => {
    localStorage.setItem(`currentActivePage`, JSON.stringify(currentActivePage));
  };

  // useEffect(() => {

  //   if (!JSON.parse(localStorage.getItem(`currentActivePage`))) {
  //     setLocalStorage(activePage);
  //   } else {
  //     setActivePage(JSON.parse(localStorage.getItem(`currentActivePage`)));
  //   }

  //   const screenRollStep = document.documentElement.clientHeight;

  //   window.scrollTo({
  //     top: screenRollStep * activePage,
  //     behavior: `instant`
  //   });

  //   return () => {
  //     setLocalStorage(activePage);
  //   }
  // });

  useEffect(() => {
    setLocalStorage(activePage)
  });

  useEffect(() => {
    
    const wheelScrollHandler = (evt) => { 
      const screenRollStep = document.documentElement.clientHeight;

      if (evt.deltaY > 0 && activePage !== lastPageIndex) {
        window.scrollTo({
          top: screenRollStep * (activePage + PAGE_INDEX_STEP),
          behavior: `smooth`
        });

        setActivePage((prevState) => prevState + PAGE_INDEX_STEP);
        // setLocalStorage(activePage);

      } else if (evt.deltaY < 0 && activePage !== FIRST_PAGE_INDEX) {
        window.scrollTo({
          top: screenRollStep * (activePage - PAGE_INDEX_STEP),
          behavior: `smooth`
        });

        setActivePage((prevState) => prevState - PAGE_INDEX_STEP);
        // setLocalStorage(activePage);
      }
    };

    window.addEventListener('mousewheel', wheelScrollHandler);

    console.log(`localStorage: ${JSON.parse(localStorage.getItem(`currentActivePage`))}`);
    console.log(`activePage: ${activePage}`)

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
            setActivePage={setActivePage}
          />
        )
        || null
      }

      {
        childrenPages[SECOND_PAGE_INDEX]
        && <Scroller setActivePage={setActivePage} />
        || null
      }

    </div>
  );
};

export default PagesHolder;
