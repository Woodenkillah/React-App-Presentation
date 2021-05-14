import React, { useState, useEffect, useRef } from 'react';
import styles from './PagesHolder.module.css';
import DotsSlider from '../DotsSlider/DotsSlider';
import Scroller from '../Scroller/Scroller';

const PagesHolder = ({ children }) => {

  const childrenPages = React.Children.toArray(children);
  const emptyDotsList = new Array(childrenPages.length).fill(``);

  const FIRST_PAGE_INDEX = 0;
  const SECOND_PAGE_INDEX = 1;
  const LAST_PAGE_INDEX = childrenPages.length - 1;
  const PAGE_INDEX_STEP = 1;

  const [activePage, setActivePage] = useState(FIRST_PAGE_INDEX);

  useEffect(() => {
    
        const wheelScrollHandler = (evt) => {

            const rollStep = document.documentElement.clientHeight;
    
            if (evt.deltaY > 0 && activePage !== LAST_PAGE_INDEX) {
                window.scrollTo({
                    top: rollStep * (activePage + PAGE_INDEX_STEP),
                    behavior: `smooth`
                });
                setActivePage((prevState) => prevState + PAGE_INDEX_STEP)
            } else if (evt.deltaY < 0 && activePage !== FIRST_PAGE_INDEX) {
                window.scrollTo({
                    top: rollStep * (activePage - PAGE_INDEX_STEP),
                    behavior: `smooth`
                });
                setActivePage((prevState) => prevState - PAGE_INDEX_STEP)
            }
        };
    
        window.addEventListener('mousewheel', wheelScrollHandler);
    
        return () => {
            window.removeEventListener('mousewheel', wheelScrollHandler)
        };
    
    });

  console.log(activePage)

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
        && <Scroller setActivePage={setActivePage} secondPage={SECOND_PAGE_INDEX} />
        || null
      }

    </div>
  );
};

export default PagesHolder;