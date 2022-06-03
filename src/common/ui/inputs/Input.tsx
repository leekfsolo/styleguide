import React, { FC, useState } from "react";

import styles from "./Input.module.scss";

interface Props {
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  value?: string;
  size?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  row?: string;
}

const Input: FC<Props> = (props: Props) => {
  const {
    error = false,
    disabled = false,
    helperText = "",
    value = "",
    size = "md",
    fullWidth = false,
    multiline = false,
    row = "",
  } = props;

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const randomId = Math.pow(Math.random(), 9).toString();
  return (
    <div className={`${styles.input} ${isFocus ? styles.focus : ""}`}>
      <label htmlFor={randomId}>Label</label>
      <input
        type="text"
        placeholder="Placeholder"
        id={randomId}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      ></input>
    </div>
  );
};

export default Input;
