import { useEffect, useRef, ReactNode} from "react";
import cn from "classnames";
import clasess from "./Modal.module.css";

export interface ModalProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    isClose: (state: boolean) => void;
}

export const Modal = ({
  isOpen,
  isClose,
  title,
  children,
}: ModalProps): JSX.Element => {
  const modalWindow = useRef<HTMLDivElement | null>(null);
  const handleCloseModal = () => {
    isClose && isClose(false);
  };
  const handleClickRoot = (event: React.MouseEvent): void => {
    if (!modalWindow.current?.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <div
      className={cn(clasess.root, {
        [clasess.open]: isOpen,
      })}
      onClick={handleClickRoot}
    >
      <div className={clasess.modal} ref={modalWindow}>
        <div className={clasess.head}>
          {title}
          <span className={clasess.btnClose} onClick={handleCloseModal}></span>
        </div>
        <div className={clasess.content}>{children}</div>
      </div>
    </div>
  );
};
