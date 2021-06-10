import React from "react";
import styles from "./Button.module.scss";
interface Props {
  children?: React.ReactNode;
  AdditionalClass?: string;
  visible?: string;
  invisible?: string;
}
export function InlineButton({ AdditionalClass, children }: Props) {
  const extraClasses = AdditionalClass === "rounded" && styles.rounded;

  return (
    <button className={`${styles.inline}  ${extraClasses}`}>{children}</button>
  );
}

export function OrderButton({ visible, invisible }: Props) {
  return (
    <button className={styles.order}>
      <span className={styles.order__visible}>{visible}</span>
      <span className={styles.order__invisible}>{invisible}</span>
    </button>
  );
}

export function WhiteButtonAnimated({ children }: Props) {
  return (
    <button
      className={`${styles.btn} ${styles.btn__white} ${styles.btn__animated}`}
    >
      {children}
    </button>
  );
}
