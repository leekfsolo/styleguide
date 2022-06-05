import React, { FC, ReactNode } from "react";
import styles from "./Page.module.scss";

interface Props {
  title?: string;
  variant?: string;
  fullWidth?: boolean;
  children: ReactNode;
}

const ComponentGroup: FC<Props> = (props: Props) => {
  const { title = "", variant = "gray-1", fullWidth = false, children } = props;

  return (
    <section className={`${styles.group} ${fullWidth ? styles.fullWidth : ""}`}>
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

export default ComponentGroup;
