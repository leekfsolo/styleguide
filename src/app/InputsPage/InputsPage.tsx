import React from "react";

import Input from "../../common/ui/inputs";

import styles from "../Page.module.scss";

const InputsPage = () => {
  return (
    <>
      <h1>Inputs</h1>

      <div>
        <Input />
        <Input error />
        <Input disabled />
        <Input helperText="Some interesting text" />
        <Input helperText="Some interesting text" error />
        <Input startIcon />
        <Input endIcon />
        <Input value="text" />
        <Input size="sm" />
        <Input size="md" />
        <Input fullWidth />
        <Input multiline row="4" />
      </div>

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
