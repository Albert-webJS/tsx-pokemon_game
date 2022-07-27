import { MenuHeaderProps } from "./MenuHeader.props";
import { LoginForm } from "../LoginForm/LoginForm";
import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./Navbar/Navbar";
import { Modal } from "../Modal/Modal";
import { TypeUserInfo } from "../LoginForm/LoginForm.props";

const ApiKey = "AIzaSyCMBWoOpCWZIJXXFryYI47JvvV7VB4MmtY";

export const MenuHeader = ({ bgActive }: MenuHeaderProps): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const handleClicHamburg = (): void => {
    setOpen((prevState) => !prevState);
  };
  const handleClickLogin = (): void => {
    setOpenModal((prevState) => !prevState);
  };
  const handleLoginFormInfo = async ({
    email,
    password,
  }: TypeUserInfo): Promise<void> => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    };
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${ApiKey}`,
      requestOptions
    );
    console.log("response: ", response);
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
      <Modal isOpen={isOpenModal} isClose={handleClickLogin} title="Log in..">
        <LoginForm onSubmit={handleLoginFormInfo} />
      </Modal>
    </>
  );
};
