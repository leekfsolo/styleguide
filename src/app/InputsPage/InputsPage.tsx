import React from "react";

import Input from "../../common/ui/inputs";
import ComponentGroup from "../ComponentGroup";

import styles from "../Page.module.scss";

const InputsPage = () => {
  return (
    <>
      <h1>Inputs</h1>

      <div>
        <div className={styles["row"]}>
          <ComponentGroup title="<Input />">
            <Input />
          </ComponentGroup>
          <ComponentGroup title="<Input error />">
            <Input error />
          </ComponentGroup>
          <ComponentGroup title="<Input disabled />">
            <Input disabled />
          </ComponentGroup>
        </div>

        <div className={styles["row-lg"]}>
          <ComponentGroup title='<Input helperText="Some interesting text" />'>
            <Input helperText="Some interesting text" />
          </ComponentGroup>
          <ComponentGroup title='<Input helperText="Some interesting text" error />'>
            <Input helperText="Some interesting text" error />
          </ComponentGroup>
        </div>

        <div className={styles.row}>
          <ComponentGroup title="<Input startIcon />">
            <Input startIcon />
          </ComponentGroup>
          <ComponentGroup title="<Input endIcon />">
            <Input endIcon />
          </ComponentGroup>
        </div>

        <div className={styles.row}>
          <ComponentGroup title='<Input value="text" />'>
            <Input value="text" />
          </ComponentGroup>
        </div>

        <div className={styles.row}>
          <ComponentGroup title='<Input size="sm" />'>
            <Input size="sm" />
          </ComponentGroup>
          <ComponentGroup title='<Input size="md" />'>
            <Input size="md" />
          </ComponentGroup>
        </div>

        <div className={styles.row}>
          <ComponentGroup title="<Input fullWidth />" fullWidth>
            <Input fullWidth />
          </ComponentGroup>
        </div>

        <div className={styles.row}>
          <ComponentGroup title='<Input multiline row="4" />'>
            <Input multiline row="4" />
          </ComponentGroup>
        </div>
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
