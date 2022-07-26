import { IPokemon } from "./IPokemon";

export interface IBoard {
    position: number;
    card: null | IPokemon;
}