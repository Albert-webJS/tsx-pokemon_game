import { Routes, Route } from "react-router-dom";
import { StartPage } from "./routes/StartPage/StartPage";
import { BoardPage } from "./routes/BoardPage/BoardPage";
import { FinishPage } from "./routes/FinishPage/FinishPage";
import { FullScren } from "../../hoc";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PokemonsType } from "../../service/IFirebase";
import {
  getPokemonsAsync,
} from "../../store/pokemons/pokemons";
import { firebaseInstance } from "../../App";
import { IPokemon } from "../../interfaces/IPokemon";

export const GamePage = () => {
  const [pokemons, setPokemons] = useState<PokemonsType>({});
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonsType>({});
  const dispatch = useDispatch();


  useEffect(() => {
    firebaseInstance.initPokemonSoket((data) => setPokemons(data));
    getPokemonsAsync(dispatch);
  }, [dispatch]);

  const handleSelectedPokemons = (pokemon: IPokemon, key: string): void => {
    setSelectedPokemons((prevState) => {
      return {
        ...prevState,
        [key]: {
          ...pokemon,
          selected: true,
        },
      };
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <FullScren
            component={<StartPage onSelected={handleSelectedPokemons} selectedState={selectedPokemons} />}
          />
        }
      />
      <Route path="board" element={<BoardPage />} />
      <Route path="finish" element={<FinishPage />} />
    </Routes>
  );
};
