import { IPokemon } from "./Pokemon";

export interface IBoard {
    position: number;
    card: null | IPokemon;
}