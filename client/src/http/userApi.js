import { HOME_ROUTE } from "../consts/consts";
import { loginSuccess, logoutUser } from "../redux/userRedux";
import {$host} from "./index";

export const login = async (dispatch, user) => {
    const data = await $host.post('users/login', user)
    dispatch(loginSuccess(data.data));
    localStorage.setItem("token",data.data.accessToken)
}

export const registration = async (dispatch, user) => {
    const data = await $host.post('users/registration', user)
    dispatch(loginSuccess(data.data));
    window.location.replace(HOME_ROUTE)
}

export const logout = async (dispatch) => {
    await $host.post('users/logout')
    dispatch(logoutUser());
    localStorage.removeItem("token")
}