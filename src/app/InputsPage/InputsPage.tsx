import React from "react";

import styles from "../Page.module.scss";

const InputsPage = () => {
  return (
    <>
      <h1>Inputs</h1>

      <div className={styles.note}>
        <p>Icons: https://material.io/resources/icons/?style=round</p>
        <p>
          created by <span>username</span> - devChallenges.io
        </p>
      </div>
    </>
  );
};

export default InputsPage;
