import { ReactNode } from "react";

export interface ButtonStyledProps {
  variant?: string;
  color?: string;
  size: "small" | "medium" | "large" | "fit-content";
  round?: boolean;
}

export interface ButtonProps extends ButtonStyledProps {
  name: string | ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export interface SetWidth {
  size: string;
  round?: boolean;
}

export interface SetHeight {
  round?: boolean;
}

export type SetBackground = {
  variant?: string;
  color?: string;
};
