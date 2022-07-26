import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { StartPage } from "./routes/StartPage/StartPage";
import { BoardPage } from "./routes/BoardPage/BoardPage";
import { FinishPage } from "./routes/FinishPage/FinishPage";
import { PokemonContext } from "../../context/pokemonContext";
import { FirebaseContext } from "../../context/firebaseContext";
import { PokemonsType } from "../../service/IFirebase";
import {
  getPokemonsAsync,
  selectPokemonsData,
} from "../../store/pokemons/pokemons";
import { FullScren } from "../../components";

export const GamePage = () => {
  const firebase = useContext(FirebaseContext);
  const [pokemonses, setPokemons] = useState<PokemonsType>({});
  console.log("state: ", pokemonses);
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonsType>({});

  const pokemonsRedux = useSelector(selectPokemonsData);
  console.log("redux: ", pokemonsRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemonsAsync(dispatch);
  }, [dispatch]);

  useEffect(() => {
    firebase?.initPokemonSoket((data) => setPokemons(data));
  }, [firebase]);

  const handleSelectedPokemons = (pokemons: PokemonsType): void => {
    setPokemons(() => {
      return {
        ...pokemons,
      };
    });
    setSelectedPokemons(
      Object.entries(pokemons).reduce((acc, [key, value]) => {
        if (value.selected) acc[key] = value;
        return acc;
      }, {} as PokemonsType)
    );
  };
  return (
    <PokemonContext.Provider
      value={{
        pokemons: pokemonses,
        onSelectedPokemons: handleSelectedPokemons,
        selectedPokemons: selectedPokemons,
      }}
    >
      <Routes>
        <Route path="/" element={<FullScren component={<StartPage />} />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="finish" element={<FinishPage />} />
      </Routes>
    </PokemonContext.Provider>
  );
};
