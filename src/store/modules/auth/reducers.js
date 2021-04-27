import { REHYDRATE } from "redux-persist";

const INITIAL_STATE = {
  token: "",
  currentUser: {},
  company: {},
  permissions: {},
  errorText: "",
  isAuthenticate: false,
};

export default function auth(state = INITIAL_STATE, action) {
  console.log("REHYDRATE", REHYDRATE);
  switch (action.type) {
    case "@authentication/SET_IS_AUTHENTICATE_SUCCESS":
      console.log("state", state, action.payload);
      // return {
      //   ...state,
      //   isAuthenticate: action.payload,
      // };
      return {
        ...state,
        isAuthenticate: action.payload,
      };
    case "@authentication/SET_TOKEN_SUCCESS":
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload,
        },
      };
    default:
      return state;
  }
}
