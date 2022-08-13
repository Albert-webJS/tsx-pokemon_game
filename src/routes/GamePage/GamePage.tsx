import { Routes, Route } from "react-router-dom";
import { StartPage } from "./routes/StartPage/StartPage";
import { BoardPage } from "./routes/BoardPage/BoardPage";
import { FinishPage } from "./routes/FinishPage/FinishPage";
import { PokemonContext } from "../../context/pokemonContext";
import { FullScren } from "../../hoc";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PokemonsType } from "../../service/IFirebase";
import {
  selectPokemonsData,
  getPokemonsAsync,
} from "../../store/pokemons/pokemons";
import { firebaseInstance } from "../../App";

export const GamePage = () => {
  const [pokemons, setPokemons] = useState<PokemonsType>({});
  console.log("pokemons: ", pokemons);
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonsType>({});
  const pokemonsRedux = useSelector(selectPokemonsData);
  console.log("pokemon redux", pokemonsRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseInstance.initPokemonSoket((data) => setPokemons(data));
    getPokemonsAsync(dispatch);
  }, [dispatch]);

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
        pokemons: pokemons,
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
