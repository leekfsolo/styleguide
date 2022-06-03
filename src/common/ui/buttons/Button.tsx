import React, { FC, ReactNode } from "react";
import { ButtonColor, ButtonSize, ButtonVariant } from "./enum";
import styles from "./Button.module.scss";

import { ReactComponent as LocalGroceryStore } from "../assets/images/add_shopping_cart_white_24dp.svg";

interface Props {
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  children?: ReactNode;
  active?: boolean;
}

const Button: FC<Props> = (props: Props) => {
  const {
    disableShadow = false,
    disabled = false,
    startIcon = null,
    endIcon = null,
    variant = null,
    size = null,
    color = null,
    children = <span>Default</span>,
    active = false,
  } = props;

  const className = `${styles.btn} ${size ? styles[size] : styles.md} ${
    color ? styles[color] : styles["btn-default"]
  } ${active ? styles.active : ""} ${
    disableShadow ? styles.disableShadow : ""
  } ${variant ? styles[variant] : ""} ${
    startIcon || endIcon ? styles.icon : ""
  }`;

  return (
    <>
      {disabled ? (
        variant === ButtonVariant.TEXT ? (
          <div
            className={`${styles.btn} ${styles.md} ${styles["variant-text"]} ${styles.disabled}`}
          >
            {children}
          </div>
        ) : (
          <div className={`${styles.btn} ${styles.md} ${styles.disabled}`}>
            {children}
          </div>
        )
      ) : (
        <div className={className}>
          {startIcon === "local_grocery_store" && !endIcon ? (
            <LocalGroceryStore />
          ) : null}
          {children}
          {endIcon === "local_grocery_store" && !startIcon ? (
            <LocalGroceryStore />
          ) : null}
        </div>
      )}
    </>
  );
};

export default Button;
