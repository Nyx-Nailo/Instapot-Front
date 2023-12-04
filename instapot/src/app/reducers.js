import { combineReducers } from "redux";
import { userSlice } from "../feuters/userSlice";

export const rootReducer = combineReducers({
    user: userSlice.reducer,
});