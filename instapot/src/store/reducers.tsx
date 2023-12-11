import { combineReducers } from "redux";

import { LOGIN, LOGOUT } from "../redux/actions";

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        id: 41,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;

export const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;
