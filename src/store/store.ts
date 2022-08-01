import { configureStore } from "@reduxjs/toolkit";
import pokemons from "./pokemons/pokemons";
import user from './user/user';




export default configureStore({
    reducer: {
        user: user,
        pokemons: pokemons,
    }
});