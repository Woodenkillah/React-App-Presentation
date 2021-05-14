import React, {useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './App.module.css';
import TitlePage from '../TitlePage/TitlePage';
import MidPage from '../MidPage/MidPage';
import InfoPage from '../InfoPage/InfoPage';
import PagesHolder from '../PagesHolder/PagesHolder';

const App = () => {

    // useEffect(() => {
    //
    //     const wheelScrollHandler = (evt) => {
    //
    //         let currentTopCoord = 0;
    //         const rollStep = document.documentElement.clientHeight;
    //
    //         if (evt.deltaY > 0) {
    //             currentTopCoord = currentTopCoord + rollStep;
    //             window.scrollTo({
    //                 top: currentTopCoord,
    //                 behavior: `smooth`
    //             });
    //             console.log(currentTopCoord)
    //         } else {
    //             currentTopCoord = currentTopCoord - rollStep;
    //             window.scrollTo({
    //                 top: currentTopCoord,
    //                 behavior: `smooth`
    //             });
    //             console.log(currentTopCoord)
    //         }
    //     };
    //
    //     window.addEventListener('mousewheel', wheelScrollHandler);
    //
    //     return () => {
    //         window.removeEventListener('mousewheel', wheelScrollHandler)
    //     };
    //
    // });

  return (
    <PagesHolder>
      <TitlePage />
      <MidPage />
      <InfoPage />
    </PagesHolder>
  );
};

export default App;
