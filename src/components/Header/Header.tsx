import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import clasess from "./Header.module.css";

interface HeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export const Header = ({ title, description }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/game");
  };
  return (
    <header className={clasess.root}>
      <div className={clasess.forest}></div>
      <div className={clasess.silhouette}></div>
      <div className={clasess.moon}></div>
      <div className={clasess.container}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button className={clasess.button} onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  );
};
