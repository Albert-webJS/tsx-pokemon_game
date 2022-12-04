import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { FullScren } from "../../hoc";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PokemonsType } from "../../service/IFirebase";
import { getPokemonsAsync } from "../../store/pokemons/pokemons";
import { firebaseInstance } from "../../App";
import { IPokemon } from "../../types";

const StartPage = lazy(() => import("./routes/StartPage/StartPage"));
const BoardPage = lazy(() => import("./routes/BoardPage/BoardPage"));
const FinishPage = lazy(() => import("./routes/FinishPage/FinishPage"));

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
    // fallback
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <FullScren
              component={
                <StartPage
                  onSelected={handleSelectedPokemons}
                  selectedState={selectedPokemons}
                />
              }
            />
          }
        />
        <Route path="board" element={<BoardPage />} />
        <Route path="finish" element={<FinishPage />} />
      </Routes>
    </Suspense>
  );
};
