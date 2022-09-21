import React from "react";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing Found
      </h1>
      <p className={styles.description}>
        Unfortunately this page doesn't exist in your internet shop
      </p>
    </div>
  );
};
