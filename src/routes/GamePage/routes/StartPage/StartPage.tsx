import { useNavigate } from "react-router-dom";
import { GameCard } from "../../../../components";
import clasess from "./StartPage.module.css";
import { IPokemon } from "../../../../types";
import { useSelector } from "react-redux";
import { selectPokemonsData } from "../../../../store/pokemons/pokemons";
import { PokemonsType } from "../../../../service/IFirebase";

interface StartPageProps {
    onSelected: (pokemon: IPokemon, key: string ) => void;
    selectedState: PokemonsType;
}

const StartPage = ({
  onSelected,
  selectedState,
}: StartPageProps): JSX.Element => {
  const navigate = useNavigate();
  const pokemonsState = useSelector(selectPokemonsData);

  console.log("selected state: ", selectedState);

  const handleChangePage = (): void => {
    navigate("board");
  };

  const handleСhangeSelected = (key: string): void => {
    const pokemons = { ...pokemonsState[key] };
    onSelected && onSelected(pokemons, key);
    // setSelectedPokemons((pokemon) => ({
    //   ...pokemon,
    //   [key]: {
    //     ...pokemon[key],
    //     selected: !pokemon[key].selected
    //   },
    // }));
  };

  return (
    <div className={clasess.wrapper}>
      <button
        className={clasess.button}
        onClick={handleChangePage}
        disabled={Object.keys(selectedState ?? {}).length < 5}
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
                if (Object.keys(selectedState ?? {}).length <= 5) {
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

export default StartPage;
