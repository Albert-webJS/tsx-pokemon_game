import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameCard } from "../../../../components";
import clasess from "./StartPage.module.css";
import { IPokemon } from "../../../../types";
import { selectPokemonsData } from "../../../../store/pokemons/pokemons";
import { useSelector } from "react-redux";

const MAX_POKEMONS_SELECT = 5;

const StartPage = (): JSX.Element => {
  const pokemons = useSelector(selectPokemonsData);
  const [selectedPokemons, setSelectedPokemons] = useState<IPokemon[]>([]);
  const navigate = useNavigate();

  const handleChangePage = (): void => {
    navigate("board");
  };

  const handleSelectPokemons = (key: string): void => {
    if (selectedPokemons.length > MAX_POKEMONS_SELECT) {
      return;
    }
    const pokemon = pokemons[key];
    setSelectedPokemons((pokemons) => pokemons.concat(pokemon));
  };

  const gameCards = useMemo(
    () =>
      Object.entries(pokemons).map(([key, pokemon]) => (
        <GameCard
          key={key}
          pokemon={pokemon}
          className={clasess.card}
          isActive={true}
          isSelected={pokemon.selected}
          onClickCard={() => {
            handleSelectPokemons(key);
          }}
        />
      )),
    [pokemons]
  );

  return (
    <div className={clasess.wrapper}>
      <button
        className={clasess.button}
        onClick={handleChangePage}
        disabled={selectedPokemons.length < MAX_POKEMONS_SELECT}
      >
        Start Game
      </button>
      <div className={clasess.grid}>{gameCards}</div>
    </div>
  );
};

export default StartPage;
