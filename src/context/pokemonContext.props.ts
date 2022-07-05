import { PokemonsType } from '../service/IFirebase';

export interface PokemonContextProps<T = PokemonsType> {
    onSelectedPokemons(pokemons: T): void;
    pokemons: T;
    selectedPokemons: T;
}