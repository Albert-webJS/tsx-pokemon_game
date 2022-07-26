import { configureStore } from "@reduxjs/toolkit";
import pokemons from "./pokemons/pokemons";




export default configureStore({
    reducer: {
        pokemons: pokemons,
    }
});