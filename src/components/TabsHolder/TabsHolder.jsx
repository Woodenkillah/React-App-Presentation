import React from 'react';
import styles from './TabsHolder.module.css';

const TabsHolder = ({ children, tabIndex }) => {

  const childrenTabs = React.Children.toArray(children);

  const tabsRollStep = document.documentElement.clientWidth;

  const screenPositionStyle = {
    transform: `translateX(${-tabsRollStep * tabIndex}px)`,
  };

  return (
    <div
      style={screenPositionStyle}
      className={styles.TabsHolder}
    >

      { childrenTabs }

    </div>
  );
};

export default TabsHolder;
