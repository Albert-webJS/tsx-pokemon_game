import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        data: {},
    },
    reducers: {
        fetchUser: () => ({
            isLoading: true,
            data: {},
        }),
        updateUser: (state, action) => ({
            isLoading: false,
            data: action.payload,
        }),
        removeUser: () => ({
            isLoading: false,
            data: {},
        }),
    }
});


interface UserState {
    isLoading: boolean;
    data: Record<string, string>
}

export const { fetchUser, updateUser, removeUser } = slice.actions;

export const selectUserLoading = (state: Record<string, UserState>) => state.user.isLoading;
export const selectUser = (state: Record<string, UserState>) => state.user.data;