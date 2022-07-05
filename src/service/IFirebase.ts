import { Pokemon } from "../interfaces/Pokemon";

export type PokemonsType = Record<string, Pokemon>;

export interface IFirebase {
    initPokemonSoket(cb: (data: PokemonsType) => void): void;
    getPokemonsOnce(): Promise<PokemonsType>;
    postPokemon(key: string, pokemon: Pokemon): void;
    addPokemon(pokemon: Pokemon): void;
    offPokemonSoket(): void;
}