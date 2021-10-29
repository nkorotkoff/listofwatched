import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
  ERROR,
} from "../actions/actionType";

const users = {
  user: null,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = users, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload, error: null };
    case USER_LOGOUT:
      return { ...(state, null) };
    case USER_SIGNUP:
      return { ...state, user: null };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
