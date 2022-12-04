import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import firebaseconfig from "@assets/firebaseconfig.json";
import { RootState } from "../type";

interface UserState {
    isLoading: boolean;
    data: Record<string, string>
}

const initialState: UserState = {
    isLoading: false,
    data: {},
};

export const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUser: state => {
            state.isLoading = true;
        },
        updateUser: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        removeUser: state => {
            state.isLoading = false;
            state.data = {};
        },
    }
});

export const { fetchUser, updateUser, removeUser } = slice.actions;

export const selectUserLoading = (state: RootState) => state.user.isLoading;
export const selectUser = (state: RootState) => state.user.data;
export const secectGetLocalId = (state: RootState) => state.user.data?.localId;

const { apiKey } = firebaseconfig;


export const getUserAsync = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    const idToken = localStorage.getItem("idToken");
    if (!idToken) {
        dispatch(removeUser());
        return;
    }
    try {
        dispatch(fetchUser());
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                idToken,
            })
        };
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, requestOptions);
        const request = await response.json();

        if ("error" in request) {
            localStorage.removeItem("IdToken");
            dispatch(removeUser());
        } else {
            dispatch(updateUser(request.users[0]));
        }
    } catch (error) {
        console.error(error);
    }
};

export const userReducer = slice.reducer;