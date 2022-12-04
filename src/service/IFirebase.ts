import { IPokemon } from "../types";

export type PokemonsType = Record<string, IPokemon>;

export interface IFirebase {
    initPokemonSoket(cb: (data: PokemonsType) => void): void;
    getPokemonsOnce(): Promise<PokemonsType>;
    postPokemon(key: string, pokemon: IPokemon): void;
    addPokemon(pokemon: IPokemon): void;
    offPokemonSoket(): void;
}