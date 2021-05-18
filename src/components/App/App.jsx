import React from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './App.module.css';
import TitlePage from '../TitlePage/TitlePage';
import MidPage from '../MidPage/MidPage';
import InfoPage from '../InfoPage/InfoPage';
import PagesHolder from '../PagesHolder/PagesHolder';

const App = () => {

  return (
    <PagesHolder>
      <TitlePage />
      <MidPage />
      <InfoPage />
    </PagesHolder>
  );
};

export default App;
