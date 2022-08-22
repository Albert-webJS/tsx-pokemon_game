import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: "selected",
    initialState: {
        pokemon: [],
    },
    reducers: {
        selectedPokemonCard: (state, action) => ({
            ...state,
            pokemon: action.payload
        })
    }
});

export const { selectedPokemonCard } = slice.actions;

export default slice.reducer;
