import * as React from "react";
import * as icons from "./svg";

type IconType = keyof typeof icons;

import styles from "./icon.module.css";
import classNames from "classnames";

type Props = {
  name: IconType;
  className?: string;
};

/**
 * Icon component
 */
export const Icon: React.FC<Props> = ({ name, className, ...restProps }) => {
  const IconComponent = icons[name];

  if (typeof IconComponent === "undefined") {
    console.error("Requested icon does not exist");
    return null;
  }

  const finalClassName = classNames(className, styles.container);

  return (
    <span {...restProps} className={finalClassName}>
      <IconComponent />
    </span>
  );
};
