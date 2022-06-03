import React from "react";
import Button from "../../common/ui/buttons/Button";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "../../common/ui/buttons/enum";
import ButtonGroup from "./ButtonGroup";

import styles from "../Page.module.scss";

const ButtonsPage = () => {
  return (
    <>
      <h1>Buttons</h1>
      <div className={styles.row}>
        <ButtonGroup title="<Button />" variant="gray-1">
          <Button />
        </ButtonGroup>
        <ButtonGroup title="&amp;:hover, &amp;:focus" variant="gray-3">
          <Button active />
        </ButtonGroup>
      </div>

      <div className={styles.row}>
        <ButtonGroup title='<Button variant="outline" />' variant="gray-1">
          <Button variant={ButtonVariant.OUTLINE} />
        </ButtonGroup>
        <ButtonGroup title="&amp;:hover, &amp;:focus" variant="gray-3">
          <Button variant={ButtonVariant.OUTLINE} active />
        </ButtonGroup>
      </div>

      <div className={styles.row}>
        <ButtonGroup title='<Button variant="text" />' variant="gray-1">
          <Button variant={ButtonVariant.TEXT} />
        </ButtonGroup>
        <ButtonGroup title="&amp;:hover, &amp;:focus" variant="gray-3">
          <Button variant={ButtonVariant.TEXT} active />
        </ButtonGroup>
      </div>

      <div className={styles.row}>
        <ButtonGroup title="<Button disableShadow />" variant="gray-1">
          <Button disableShadow color={ButtonColor.PRIMARY} />
        </ButtonGroup>
      </div>

      <div className={styles.row}>
        <ButtonGroup title="<Button disabled />" variant="gray-1">
          <Button disabled />
        </ButtonGroup>
        <ButtonGroup
          title='<Button variant="text" disabled />'
          variant="gray-3"
        >
          <Button disabled variant={ButtonVariant.TEXT} />
        </ButtonGroup>
      </div>

      <div className={styles["row-lg"]}>
        <ButtonGroup
          title='<Button startIcon="local_grocery_store" />'
          variant="black"
        >
          <Button startIcon="local_grocery_store" color={ButtonColor.PRIMARY} />
        </ButtonGroup>
        <ButtonGroup
          title='<Button endIcon="local_grocery_store" />'
          variant="black"
        >
          <Button endIcon="local_grocery_store" color={ButtonColor.PRIMARY} />
        </ButtonGroup>
      </div>

      <div className={styles.row}>
        <ButtonGroup title='<Button size="sm" />' variant="black">
          <Button size={ButtonSize.SM} color={ButtonColor.PRIMARY} />
        </ButtonGroup>
        <ButtonGroup title='<Button size="md" />' variant="black">
          <Button size={ButtonSize.MD} color={ButtonColor.PRIMARY} />
        </ButtonGroup>
        <ButtonGroup title='<Button size="lg" />' variant="black">
          <Button size={ButtonSize.LG} color={ButtonColor.PRIMARY} />
        </ButtonGroup>
      </div>

      <div className={styles.row}>
        <ButtonGroup title='<Button color="btn-default" />' variant="black">
          <Button color={ButtonColor.DEFAULT} />
        </ButtonGroup>
        <ButtonGroup title='<Button color="btn-primary" />' variant="black">
          <Button color={ButtonColor.PRIMARY} />
        </ButtonGroup>
        <ButtonGroup title='<Button color="btn-secondary" />' variant="black">
          <Button color={ButtonColor.SECONDARY}>
            <span>Secondary</span>
          </Button>
        </ButtonGroup>
        <ButtonGroup title='<Button color="btn-danger" />' variant="black">
          <Button color={ButtonColor.DANGER}>
            <span>Danger</span>
          </Button>
        </ButtonGroup>
      </div>

      <div className={styles.row}>
        <ButtonGroup title="&amp;:hover, &amp;:focus" variant="gray-3">
          <Button color={ButtonColor.DEFAULT} active />
        </ButtonGroup>
        <ButtonGroup title="hidden">
          <Button color={ButtonColor.PRIMARY} active />
        </ButtonGroup>
        <ButtonGroup title="hidden">
          <Button color={ButtonColor.SECONDARY} active>
            <span>Secondary</span>
          </Button>
        </ButtonGroup>
        <ButtonGroup title="hidden">
          <Button color={ButtonColor.DANGER} active>
            <span>Danger</span>
          </Button>
        </ButtonGroup>
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
