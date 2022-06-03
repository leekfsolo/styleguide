import React, { useState } from "react";

import { NavItem } from "../model";
import Sidebar from "./sidebar";
import ContentLayout from "../content-layout";

import styles from "../Layout.module.scss";

const MainLayout = () => {
  const [navItems, setNavItems] = useState<Array<NavItem>>([
    { title: "colors", active: false },
    { title: "typography", active: false },
    { title: "spaces", active: false },
    { title: "buttons", active: false },
    { title: "inputs", active: true },
    { title: "grid", active: false },
  ]);

  return (
    <main id={styles.main}>
      <Sidebar navItems={navItems} setNavItems={setNavItems} />
      <ContentLayout navItems={navItems} />
    </main>
  );
};

export default MainLayout;
