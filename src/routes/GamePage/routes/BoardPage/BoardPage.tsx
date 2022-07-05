import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";
import clasess from "./BoardPage.module.css";

export const BoardPage = (): JSX.Element => {
  const pokemonContext = useContext(PokemonContext);
  const navigate = useNavigate();
  const convertData = Object.keys(pokemonContext?.selectedPokemons ?? {});

  useEffect(() => {
    if (convertData.length === 0) {
      navigate("/game", {replace: true});
    }
  });

  return (
    <div className={clasess.root}>
      <div className={clasess.playerOne}></div>
      <div className={clasess.board}>
        <div className={clasess.boardPlate}>1</div>
        <div className={clasess.boardPlate}>2</div>
        <div className={clasess.boardPlate}>3</div>
        <div className={clasess.boardPlate}>4</div>
        <div className={clasess.boardPlate}>5</div>
        <div className={clasess.boardPlate}>6</div>
        <div className={clasess.boardPlate}>7</div>
        <div className={clasess.boardPlate}>8</div>
        <div className={clasess.boardPlate}>9</div>
      </div>
    </div>
  );
};
