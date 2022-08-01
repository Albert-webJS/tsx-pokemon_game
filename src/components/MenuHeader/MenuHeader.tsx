import { MenuHeaderProps } from "./MenuHeader.props";
import { LoginForm } from "../LoginForm/LoginForm";
import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./Navbar/Navbar";
import { Modal } from "../Modal/Modal";
import { TypeUserInfo } from "../LoginForm/LoginForm.props";
import { NotificationManager } from "react-notifications";

const ApiKey = "AIzaSyCMBWoOpCWZIJXXFryYI47JvvV7VB4MmtY";

const signup = async (key: string, options: RequestInit): Promise<void> => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
    options
  );
  const request = await response.json();
  console.log("signup: ", request);
  return request;
};
const login = async (key: string, options: RequestInit): Promise<void> => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
    options
  );
  const request = await response.json();
  console.log("login: ", request);
  return request;
};
const loginSignUpUser = async ({
  type,
  email,
  password,
}: TypeUserInfo): Promise<T> => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  };
  switch (type) {
    case "signup":
      return await signup(ApiKey, requestOptions);
    case "login":
      return await login(ApiKey, requestOptions);
    default:
      return "I can't login user";
  }
};

export const MenuHeader = ({ bgActive }: MenuHeaderProps): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const handleClicHamburg = (): void => {
    setOpen((prevState) => !prevState);
  };
  const handleClickLogin = (): void => {
    setOpenModal((prevState) => !prevState);
  };
  const handleLoginFormInfo = async (props: TypeUserInfo): Promise<void> => { 
    const response = await loginSignUpUser(props);

    // eslint-disable-next-line no-prototype-builtins
    if (response.hasOwnProperty("error")) {
      NotificationManager.error(response.error.message, "Wrong!");
    } else {
      if (props.type === "signup") {
        const getStartingColectionCard = await fetch("https://reactmarathon-api.herokuapp.com/api/pokemons/starter");
        const request = await getStartingColectionCard.json();
        
        for (const pokemon of request.data) {
          await fetch(`https://pokemon-card-4d341-default-rtdb.firebaseio.com/${response.localId}/pokemons.json?aith=${response.idToken}`, {
            method: "POST",
            body: JSON.stringify(pokemon),
          });
        }
      }
      localStorage.setItem("IdToken", response.idToken);
      NotificationManager.success("Success message");
      handleClickLogin();
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
