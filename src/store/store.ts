import { configureStore } from "@reduxjs/toolkit";
import pokemons from "./pokemons/pokemons";
import user from './user/user';
import selectedPokemons from './pokemons/selectedPokemons';




export default configureStore({
    reducer: {
        selected: selectedPokemons,
        user: user,
        pokemons: pokemons,
    }
});