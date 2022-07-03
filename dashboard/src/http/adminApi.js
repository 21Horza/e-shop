import { loginAdmin, logoutAdmin } from "../redux/adminRedux";
import {$host} from "./index";

export const login = async (dispatch, user) => {
    const data = await $host.post('users/login', user)
    dispatch(loginAdmin(data.data));
    localStorage.setItem("token",data.data.accessToken)
    window.location.replace("/")
}

export const logout = async (dispatch) => {
    await $host.post('users/logout')
    dispatch(logoutAdmin())
    localStorage.removeItem("token")
    window.location.replace("/login")
}