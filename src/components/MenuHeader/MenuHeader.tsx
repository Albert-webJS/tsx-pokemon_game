import { LoginForm } from "../LoginForm/LoginForm";
import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./Navbar/Navbar";
import { Modal } from "../Modal/Modal";
import { TypeUserInfo } from "../../types";
import { NotificationManager } from "react-notifications";
import API from "../../dal/api/index";

interface MenuHeaderProps {
  bgActive: boolean,
}

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
    onLogin,
    onRegister,
    ...props
  }: TypeUserInfo): Promise<void> => {
    if (onRegister) {
      const response = await API.authentication.singup(props);
      localStorage.setItem("idToken", response.data.idToken);
      const { data } = await API.pokemon.get();

      API.pokemon.create(data, response);
      NotificationManager.success("Success message");
      handleClickLogin();
    }

    if (onLogin) {
      const { data } = await API.authentication.login(props);
      console.log("response: ", data);
      localStorage.setItem("idToken", data.idToken);
      NotificationManager.success("Success message");
      handleClickLogin();
    }

    // console.log("error: ", error)
    // if ("error" in response) {
    //   NotificationManager.error(error, response.error.message);
    // }
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
