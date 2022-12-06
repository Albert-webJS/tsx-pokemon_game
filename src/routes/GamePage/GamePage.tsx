import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsAsync } from "../../store/pokemons/pokemons";

const StartPage = lazy(() => import("../StartPage/StartPage"));
const BoardPage = lazy(() => import("../BoardPage/BoardPage"));
const FinishPage = lazy(() => import("../FinishPage/FinishPage"));

export const GamePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemonsAsync(dispatch);
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="finish" element={<FinishPage />} />
      </Routes>
    </Suspense>
  );
};
