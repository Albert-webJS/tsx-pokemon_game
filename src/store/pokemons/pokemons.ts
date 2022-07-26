import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { firebaseInstance } from "../../App";
import { IPokemon } from "../../interfaces/IPokemon";


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


export const getPokemonsAsync = async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchPokemons());
    const data = await firebaseInstance.getPokemonsOnce();
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