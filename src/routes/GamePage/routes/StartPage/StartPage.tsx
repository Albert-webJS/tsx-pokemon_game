import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameCard } from "../../../../components";
import clasess from "./StartPage.module.css";
import { IPokemon } from "../../../../interfaces/IPokemon";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useSelector } from "react-redux";
import { selectPokemonsData } from "../../../../store/pokemons/pokemons";


export const StartPage = (): JSX.Element => {
  const navigate = useNavigate();
  const pokemonContext = useContext(PokemonContext);
  const pokemonsState = useSelector(selectPokemonsData);

  console.log("pokemon state: ", pokemonsState);

  const handleChangePage = (): void => {
    navigate("board");
  };

  const handleСhangeSelected = (key: string): void => {
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
        {Object.entries(pokemonsState ?? {}).map(
          ([key, pokemon]: [string, IPokemon]) => (
            <GameCard
              key={key}
              pokemon={pokemon}
              className={clasess.card}
              isActive={true}
              isSelected={pokemon.selected}
              onClickCard={() => {
                if (Object.keys(pokemonContext?.selectedPokemons ?? {}).length <= 5) {
                  handleСhangeSelected(key);
                }
              }}
            />
          )
        )}
      </div>
    </div>
  );
};
