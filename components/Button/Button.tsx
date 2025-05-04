import React from "react";
import { clsx } from "clsx";
import { ButtonProps } from "./types";


const prefixCls = "rui-btn";

const Button = (props: ButtonProps) => {
  const { children, type = "default", className, style } = props;

  const classes = clsx(prefixCls, `${prefixCls}-${type}`, className);

  return (
    <button className={classes} style={style}>
      {children}
    </button>
  );
};

export default Button;
