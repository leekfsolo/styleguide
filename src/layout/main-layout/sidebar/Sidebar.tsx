import React, { FC } from "react";

import styles from "../../Layout.module.scss";
import { NavItem } from "../../model";

interface Props {
  navItems: Array<NavItem>;
  setNavItems: (newNavItems: Array<NavItem>) => void;
}

const Sidebar: FC<Props> = (props: Props) => {
  const { navItems, setNavItems } = props;

  const setActiveNavItems = (title: string) => {
    const newNavItems = navItems.map((item) => {
      if (item.title === title) item.active = true;
      else item.active = false;

      return item;
    });

    setNavItems(newNavItems);
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.variant}>Dev</span>
        <span>challenges.io</span>
      </div>

      <ul>
        {navItems.map((item, idx) => {
          if (item.active)
            return (
              <>
                <li key={idx} className={styles.active}>
                  <span>{item.title}</span>
                  <div className={styles.hoverBar}></div>
                </li>
                <br></br>
              </>
            );
          else
            return (
              <>
                <li key={idx} onClick={() => setActiveNavItems(item.title)}>
                  <span>{item.title}</span>
                </li>
                <br></br>
              </>
            );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
