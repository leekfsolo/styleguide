import React from "react";
import Button from "../../common/ui/buttons/Button";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "../../common/ui/buttons/enum";
import ComponentGroup from "../ComponentGroup";

import styles from "../Page.module.scss";

const ButtonsPage = () => {
  return (
    <>
      <h1>Buttons</h1>
      <div className={styles.row}>
        <ComponentGroup title="<Button />" variant="gray-1">
          <Button />
        </ComponentGroup>
        <ComponentGroup title="&amp;:hover, &amp;:focus" variant="gray-3">
          <Button active />
        </ComponentGroup>
      </div>

      <div className={styles.row}>
        <ComponentGroup title='<Button variant="outline" />' variant="gray-1">
          <Button variant={ButtonVariant.OUTLINE} />
        </ComponentGroup>
        <ComponentGroup title="&amp;:hover, &amp;:focus" variant="gray-3">
          <Button variant={ButtonVariant.OUTLINE} active />
        </ComponentGroup>
      </div>

      <div className={styles.row}>
        <ComponentGroup title='<Button variant="text" />' variant="gray-1">
          <Button variant={ButtonVariant.TEXT} />
        </ComponentGroup>
        <ComponentGroup title="&amp;:hover, &amp;:focus" variant="gray-3">
          <Button variant={ButtonVariant.TEXT} active />
        </ComponentGroup>
      </div>

      <div className={styles.row}>
        <ComponentGroup title="<Button disableShadow />" variant="gray-1">
          <Button disableShadow color={ButtonColor.PRIMARY} />
        </ComponentGroup>
      </div>

      <div className={styles.row}>
        <ComponentGroup title="<Button disabled />" variant="gray-1">
          <Button disabled />
        </ComponentGroup>
        <ComponentGroup
          title='<Button variant="text" disabled />'
          variant="gray-3"
        >
          <Button disabled variant={ButtonVariant.TEXT} />
        </ComponentGroup>
      </div>

      <div className={styles["row-lg"]}>
        <ComponentGroup
          title='<Button startIcon="local_grocery_store" />'
          variant="black"
        >
          <Button startIcon="local_grocery_store" color={ButtonColor.PRIMARY} />
        </ComponentGroup>
        <ComponentGroup
          title='<Button endIcon="local_grocery_store" />'
          variant="black"
        >
          <Button endIcon="local_grocery_store" color={ButtonColor.PRIMARY} />
        </ComponentGroup>
      </div>

      <div className={styles.row}>
        <ComponentGroup title='<Button size="sm" />' variant="black">
          <Button size={ButtonSize.SM} color={ButtonColor.PRIMARY} />
        </ComponentGroup>
        <ComponentGroup title='<Button size="md" />' variant="black">
          <Button size={ButtonSize.MD} color={ButtonColor.PRIMARY} />
        </ComponentGroup>
        <ComponentGroup title='<Button size="lg" />' variant="black">
          <Button size={ButtonSize.LG} color={ButtonColor.PRIMARY} />
        </ComponentGroup>
      </div>

      <div className={styles.row}>
        <ComponentGroup title='<Button color="btn-default" />' variant="black">
          <Button color={ButtonColor.DEFAULT} />
        </ComponentGroup>
        <ComponentGroup title='<Button color="btn-primary" />' variant="black">
          <Button color={ButtonColor.PRIMARY} />
        </ComponentGroup>
        <ComponentGroup
          title='<Button color="btn-secondary" />'
          variant="black"
        >
          <Button color={ButtonColor.SECONDARY}>
            <span>Secondary</span>
          </Button>
        </ComponentGroup>
        <ComponentGroup title='<Button color="btn-danger" />' variant="black">
          <Button color={ButtonColor.DANGER}>
            <span>Danger</span>
          </Button>
        </ComponentGroup>
      </div>

      <div className={styles.row}>
        <ComponentGroup title="&amp;:hover, &amp;:focus" variant="gray-3">
          <Button color={ButtonColor.DEFAULT} active />
        </ComponentGroup>
        <ComponentGroup title="hidden">
          <Button color={ButtonColor.PRIMARY} active />
        </ComponentGroup>
        <ComponentGroup title="hidden">
          <Button color={ButtonColor.SECONDARY} active>
            <span>Secondary</span>
          </Button>
        </ComponentGroup>
        <ComponentGroup title="hidden">
          <Button color={ButtonColor.DANGER} active>
            <span>Danger</span>
          </Button>
        </ComponentGroup>
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

export default ButtonsPage;
