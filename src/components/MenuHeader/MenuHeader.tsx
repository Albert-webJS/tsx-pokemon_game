import { MenuHeaderProps } from "./MenuHeader.props";
import { LoginForm } from "../LoginForm/LoginForm";
import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./Navbar/Navbar";
import { Modal } from "../Modal/Modal";

export const MenuHeader = ({ bgActive }: MenuHeaderProps): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const handleClicHamburg = (): void => {
    setOpen((prevState) => !prevState);
  };
  const handleClickLogin = (): void => {
    setOpenModal((prevState) => !prevState);
  };
  const handleLoginFormInfo = (props: any): void => {
    console.log("props: ", props);
  };
  return (
    <>
      <Menu isOpen={isOpen} onClickHamburg={handleClicHamburg} />
      <Navbar
        isOpen={isOpen}
        onClickHamburg={handleClicHamburg}
        bgActive={bgActive}
        onClickLogin={handleClickLogin}
      />
      <Modal
        isOpen={isOpenModal}
        isClose={handleClickLogin}
        title="is modal..."
      >
        <LoginForm onSubmit={handleLoginFormInfo} />
      </Modal>
    </>
  );
};
