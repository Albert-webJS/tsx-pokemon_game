import { MenuHeaderProps } from "./MenuHeader.props";
import { LoginForm } from "../LoginForm/LoginForm";
import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./Navbar/Navbar";
import { Modal } from "../Modal/Modal";
import { TypeUserInfo } from "../LoginForm/LoginForm.props";
import { NotificationManager } from "react-notifications";

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
    const request = await response.json();
    console.log("data: ", request);
    // eslint-disable-next-line no-prototype-builtins
    if (request.hasOwnProperty("error")) {
      NotificationManager.error(request.error.message, "Wrong!");
    } else {
      localStorage.setItem("IdToken", request.idToken);
      NotificationManager.success("Success message");
    }
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
        <LoginForm onSubmit={handleLoginFormInfo} isResetFiled={!isOpenModal} />
      </Modal>
    </>
  );
};
