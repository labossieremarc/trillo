import React from "react";
import styles from "./Button.module.scss";
interface Props {
  children?: React.ReactNode;
  AdditionalClass?: string;
  visible?: string;
  invisible?: string;
  colorScheme?: string;
  animated?: boolean;
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

export function ButtonAnimated({ colorScheme = 'white', children, animated }: Props) {
  let color = null;
  
    switch (colorScheme) {
      case 'orange':
        color = styles.orange;
        break;
      case 'blue':
        color = styles.blue;
        break;
      case 'green':
        color = styles.green;
        break;
      default:
        color = styles.white;
  }
  let animate = animated ? styles.animatedbtn__animated : '';
  return (
    <button
      className={`${styles.animatedbtn} ${styles.animatedbtn__white} ${animate} ${color}`}
    >
      {children}
    </button>
  );
}

export function UnderlineButton({ children}: Props) {
  
  return (
    <button className={`${styles.underlineButton}`}>{children}</button>
  )
}