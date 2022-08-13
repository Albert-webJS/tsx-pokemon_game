import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import firebaseconfig from "@assets/firebaseconfig.json";


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
export const secectGetLocalId = (state: Record<string, UserState>) => state.user.data?.localId;

const { apiKey } = firebaseconfig;


export const getUserAsync = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    const idToken = localStorage.getItem("idToken");
    console.log("idToken: ", idToken);
    if (idToken) {
        dispatch(fetchUser());
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                idToken,
            })
        };
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, requestOptions);
        const request = await response.json();
        console.log("request user: ", request);

        if ("error" in request) {
            localStorage.removeItem("IdToken");
            dispatch(removeUser());
        } else {
            dispatch(updateUser(request.users[0]));
        }
    } else {
        dispatch(removeUser());
    }
};

export default slice.reducer;