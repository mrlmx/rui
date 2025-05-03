import { CSSProperties, ReactNode } from "react";

export type ButtonType = "primary" | "dashed" | "link" | "text" | "default";

export interface ButtonProps {
  type?: ButtonType;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
