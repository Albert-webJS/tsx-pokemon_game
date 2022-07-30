import { Routes, Route } from "react-router-dom";
import { StartPage } from "./routes/StartPage/StartPage";
import { BoardPage } from "./routes/BoardPage/BoardPage";
import { FinishPage } from "./routes/FinishPage/FinishPage";
import { PokemonContext } from "../../context/pokemonContext";
import { useGamePage } from "../../hooks/useGamePage";
import { FullScren } from "../../components";

export const GamePage = () => {
  const { pokemons, selectedPokemons, handleSelectedPokemons } = useGamePage();

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
