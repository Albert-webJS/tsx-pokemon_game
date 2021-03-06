import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameCard } from "../../../../components";
import clasess from "./StartPage.module.css";
import { Pokemon } from "../../../../interfaces/Pokemon";
import { PokemonContext } from "../../../../context/pokemonContext";

export const StartPage = (): JSX.Element => {
  const navigate = useNavigate();
  const pokemonContext = useContext(PokemonContext);

  const handleChangePage = (): void => {
    navigate("board");
  };

  const handle–°hangeSelected = (key: string): void => {
    pokemonContext?.onSelectedPokemons({
      ...pokemonContext?.pokemons,
      [key]: {
        ...pokemonContext?.pokemons[key],
        selected: !pokemonContext?.pokemons[key].selected,
      },
    });
  };
  return (
    <div className={clasess.wrapper}>
      <button
        className={clasess.button}
        onClick={handleChangePage}
        disabled={
          Object.keys(pokemonContext?.selectedPokemons ?? {}).length < 5
        }
      >
        Start Game
      </button>
      <div className={clasess.grid}>
        {Object.entries(pokemonContext?.pokemons ?? {}).map(
          ([key, pokemon]: [string, Pokemon]) => (
            <GameCard
              key={key}
              pokemon={pokemon}
              className={clasess.card}
              isActive={true}
              isSelected={pokemon.selected}
              onClickCard={() => {
                if (
                  Object.keys(pokemonContext?.selectedPokemons ?? {}).length <=
                  5
                ) {
                  handle–°hangeSelected(key);
                }
              }}
            />
          )
        )}
      </div>
    </div>
  );
};
