import { ReactNode } from "react";

export interface ModalProps {
  title: string;
  show: boolean;
  content: ReactNode | string;
  hideCloseIcon?: boolean;
  setShow: Function;
}
