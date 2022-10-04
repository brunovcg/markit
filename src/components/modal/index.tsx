import { useEffect, useState } from "react";
import Icon from "../icon";
import ModalStyled from "./styles";
import { ModalProps } from "./types";

function Modal({
  title,
  content,
  hideCloseIcon = false,
  show,
  setShow,
}: ModalProps) {
  return (
    <>
      {show && (
        <ModalStyled>
          <section>
            <div className="header">
              <h2>{title}</h2>
              {!hideCloseIcon && (
                <Icon
                  className="modal-icon"
                  icon="close"
                  onClick={() => setShow(false)}
                />
              )}
            </div>
            <div className="content">{content}</div>
          </section>
        </ModalStyled>
      )}
    </>
  );
}

export default Modal;
