import React, { FC, ReactNode, useEffect, useState } from "react";
import ButtonsPage from "../../app/ButtonsPage";
import InputsPage from "../../app/InputsPage";

import styles from "../Layout.module.scss";
import { NavItem } from "../model";

interface Props {
  navItems: Array<NavItem>;
}

const ContentLayout: FC<Props> = (props: Props) => {
  const { navItems } = props;

  const [renderedPage, setRenderedPage] = useState<ReactNode>(<ButtonsPage />);

  const changePage = (title: string) => {
    switch (title) {
      // case "Buttons":
      //   setRenderedPage(<ButtonsPage />);
      //   break;
      case "inputs":
        setRenderedPage(<InputsPage />);
        break;
      default:
        setRenderedPage(<ButtonsPage />);
        break;
    }
  };

  useEffect(() => {
    navItems.forEach((item) => {
      if (item.active) changePage(item.title);
    });
  }, [navItems]);

  return <div className={styles.content}>{renderedPage}</div>;
};

export default ContentLayout;
