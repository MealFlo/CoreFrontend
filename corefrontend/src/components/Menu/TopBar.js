import React from 'react';
import styles from './TopBar.module.css';


const TopBar = ({ restaurantName, tableNumber }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.content}>
        <h1 className={styles.restaurantName}>{restaurantName}</h1>
        <p className={styles.tableNumber}>Table {tableNumber}</p>
      </div>
    </div>
  );
};

export default TopBar;