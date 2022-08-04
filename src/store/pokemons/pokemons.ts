import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { IPokemon } from "../../interfaces/IPokemon";
import firebaseConfig from '@assets/firebaseconfig.json';
import { UseGetLocalId } from "../../hooks/useGetLocalId";

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

const { databaseName } = firebaseConfig;


export const getPokemonsAsync = async (dispatch: Dispatch<AnyAction>) => {
    const IdToken = localStorage.getItem("IdToken");
    const localId = UseGetLocalId();
    dispatch(fetchPokemons());
    const response = await fetch(`https://${databaseName}.firebaseio.com/${localId}/pokemons.json?auth=${IdToken}`);
    const data = await response.json();
    console.log("data: ", data);
    dispatch(fetchPokemonsResolve(data));
};

export interface PokemonsState {
    data: Record<string, IPokemon>;
    error: null;
    isLoading: boolean;
}

export const selectPokemonsLoading = (state: Record<string, PokemonsState>) => state.pokemons.isLoading;
export const selectPokemonsData = (state: Record<string, PokemonsState>) => state.pokemons.data;

export default slice.reducer;