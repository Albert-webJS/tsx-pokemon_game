import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { IPokemon } from "../../interfaces/IPokemon";
import firebaseConfig from '@assets/firebaseconfig.json';
import { UseGetLocalId } from "../../hooks/useGetLocalId";
import { firebaseInstance } from "../../App";

export const slice = createSlice({
    name: "pokemons",
    initialState: {
        isLoading: false,
        data: {},
        error: null,
    },
    reducers: {
        fetchPokemons: (state) => ({
            ...state,
            isLoading: true
        }),
        fetchPokemonsResolve: (state, action) => ({
            ...state,
            isLoading: false,
            data: action.payload,
        }),
        fetchPokemonsReject: (state, action) => ({
            ...state,
            isLoading: false,
            data: {},
            error: action.payload,
        })
    }
});


export const { fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject } = slice.actions;

// const { databaseName } = firebaseConfig;


export const getPokemonsAsync = async (dispatch: Dispatch<AnyAction>) => {
    // const IdToken = localStorage.getItem("idToken");
    // const localId = UseGetLocalId();
    dispatch(fetchPokemons());
    const response = await firebaseInstance.getPokemonsOnce();
    dispatch(fetchPokemonsResolve(response));
};
// fetch(`https://${databaseName}/${localId}/pokemons.json?auth=${IdToken}`);

export interface PokemonsState {
    data: Record<string, IPokemon>;
    error: null;
    isLoading: boolean;
}

export const selectPokemonsLoading = (state: Record<string, PokemonsState>) => state.pokemons.isLoading;
export const selectPokemonsData = (state: Record<string, PokemonsState>) => state.pokemons.data;

export default slice.reducer;