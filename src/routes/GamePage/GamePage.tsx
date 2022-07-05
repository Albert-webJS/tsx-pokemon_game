import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { StartPage } from "./routes/StartPage/StartPage";
import { BoardPage } from "./routes/BoardPage/BoardPage";
import { FinishPage } from "./routes/FinishPage/FinishPage";
import { PokemonContext } from "../../context/pokemonContext";
import { FirebaseContext } from "../../context/firebaseContext";
import { PokemonsType } from '../../service/IFirebase';

export const GamePage = () => {
  const firebase = useContext(FirebaseContext);
  const [pokemonses, setPokemons] = useState<PokemonsType>({});
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonsType>({});

  useEffect(() => {
    firebase?.initPokemonSoket((data) => setPokemons(data));

    return () => firebase?.offPokemonSoket();
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
        <Route path="/" element={<StartPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="finish" element={<FinishPage />} />
      </Routes>
    </PokemonContext.Provider>
  );
};
