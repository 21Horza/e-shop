import { getAllusers } from "../redux/userRedux";
import {$authHost} from "./index";

export const getUsers = async (dispatch) => {
    const data = await $authHost.get('users')
    dispatch(getAllusers(data.data))
    return data
}

export const getOneUser = async (userId) => {
    const data = await $authHost.get(`users/${userId}`)
    return data
}

export const registration = async (user) => {
    const data = await $authHost.post('users/registration', user)
    return data
}

export const deleteUser = async (userId) => {
    console.log(userId)
    const data = await $authHost.delete(`users/delete/${userId}`)
    return data
}