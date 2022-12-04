import { configureStore } from "@reduxjs/toolkit";
import pokemons from "./pokemons/pokemons";
import { userReducer } from './user/user';
import selectedPokemons from './pokemons/selectedPokemons';




export const store = configureStore({
    reducer: {
        selected: selectedPokemons,
        user: userReducer,
        pokemons: pokemons,
    }
});