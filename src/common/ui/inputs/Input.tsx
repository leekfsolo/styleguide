import React, { FC, useState } from "react";

import { ReactComponent as Phone } from "../assets/images/phone.svg";
import { ReactComponent as Lock } from "../assets/images/lock.svg";

import styles from "./Input.module.scss";

interface Props {
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  startIcon?: boolean;
  endIcon?: boolean;
  helperText?: string;
  value?: string;
  size?: string;
  row?: string;
}

const Input: FC<Props> = (props: Props) => {
  const {
    error = false,
    disabled = false,
    fullWidth = false,
    multiline = false,
    startIcon = false,
    endIcon = false,
    helperText = "",
    value = "",
    size = "md",
    row = "5",
  } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const randomId = Math.pow(Math.random(), 9).toString();
  const disabledAttr = disabled ? { disabled: true } : null;

  const className = `${styles.inputSection} ${isFocus ? styles.focus : ""} ${
    error ? styles.error : ""
  } ${fullWidth ? styles.fullWidth : ""} ${disabled ? styles.disabled : ""} ${
    size === "sm" ? styles.sm : styles.md
  } ${startIcon ? styles.startIcon : ""} ${endIcon ? styles.endIcon : ""}`;

  return (
    <>
      {multiline ? (
        <div className={className}>
          <label htmlFor={randomId}>Label</label>
          <textarea
            rows={Number(row)}
            placeholder="Placeholder"
            id={randomId}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            defaultValue={value}
            className={styles.input}
          ></textarea>
          {helperText ? <small>{helperText}</small> : null}
        </div>
      ) : (
        <div className={className}>
          {startIcon && !endIcon ? <Phone /> : null}
          <label htmlFor={randomId}>Label</label>
          <input
            type="text"
            placeholder="Placeholder"
            id={randomId}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            defaultValue={value}
            className={styles.input}
            {...disabledAttr}
          ></input>
          {!startIcon && endIcon ? <Lock /> : null}
          {helperText ? <small>{helperText}</small> : null}
        </div>
      )}
    </>
  );
};

export default Input;
