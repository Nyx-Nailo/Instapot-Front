import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: any;
    isLoading: boolean;
}

const initialState: UserState = {
    user: null,
    isLoading: true
};

export const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
            loginUser: (state, action: PayloadAction<any> ) => {
                state.user = action.payload;
            },
            logoutUser: (state) => {
                state.user = null;
            },
            setLoading: (state, action: PayloadAction<boolean> ) => {
                state.isLoading = action.payload;
            }
        }
});

export const { loginUser, logoutUser, setLoading } = userSlice.actions;

export default userSlice.reducer;