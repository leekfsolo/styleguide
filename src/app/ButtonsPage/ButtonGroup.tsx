import React, { FC, ReactNode } from "react";
import styles from "../Page.module.scss";

interface Props {
  title?: string;
  variant?: string;
  children: ReactNode;
}

const ButtonGroup: FC<Props> = (props: Props) => {
  const { title = "", variant = "black", children } = props;

  return (
    <section className={styles.group}>
      <p
        className={`${styles["variant-" + variant]} ${
          title === "hidden" ? styles.hidden : ""
        }`}
      >
        {title}
      </p>
      {children}
    </section>
  );
};

export default ButtonGroup;
