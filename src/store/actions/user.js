import * as api from "../api/index";
import {
  USER_LOGIN,
  USER_SIGNUP,
  ERROR,
  USER_LOGOUT,
} from "../actions/actionType";
export const signIn = (datas) => async (dispatch) => {
  try {
    const { data } = await api.login(datas);
    dispatch({ type: USER_LOGIN, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const signUp = (datas) => async (dispatch) => {
  try {
    await api.signUp(datas);
    dispatch({ type: USER_SIGNUP });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await api.loadUser();
    console.log(data);

    dispatch({ type: USER_LOGIN, payload: data.response });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
