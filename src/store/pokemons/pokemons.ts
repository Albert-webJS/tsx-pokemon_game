import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { IPokemon } from "../../types";
import { firebaseInstance } from "../../App";
import { RootState } from "../type";

export interface PokemonsState {
    data: Record<string, IPokemon>;
    error: null;
    isLoading: boolean;
}

const initialState: PokemonsState = {
    isLoading: false,
    data: {},
    error: null,
};
export const slice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        fetchPokemons: state => {
            state.isLoading = true;
        },
        fetchPokemonsResolve: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        fetchPokemonsReject: (state, action) => {
            state.isLoading = false;
            state.data = {};
            state.error = action.payload;
        },
    }
});


export const { fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject } = slice.actions;

// const { databaseName } = firebaseConfig;


export const getPokemonsAsync = async (dispatch: Dispatch<AnyAction>) => {
    // const IdToken = localStorage.getItem("idToken");
    // const localId = UseGetLocalId();
    try {
        dispatch(fetchPokemons());
        const response = await firebaseInstance.getPokemonsOnce();
        dispatch(fetchPokemonsResolve(response));
    } catch (error) {
        console.error(error);
    }
};
// fetch(`https://${databaseName}/${localId}/pokemons.json?auth=${IdToken}`);


export const selectPokemonsLoading = (state: RootState) => state.pokemons.isLoading;
export const selectPokemonsData = (state: RootState) => state.pokemons.data;

export default slice.reducer;