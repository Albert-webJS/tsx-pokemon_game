import { createContext } from "react";
import { PokemonContextProps } from "./pokemonContext.props";

export const PokemonContext = createContext<PokemonContextProps | null>(null);