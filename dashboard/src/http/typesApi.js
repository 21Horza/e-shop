import { getAllTypes } from "../redux/typeRedux";
import {$authHost} from "./index";

export const createType = async (type) => {
    console.log(type)
    const {data} = await $authHost.post('types/create', type)
    return data
}

export const deleteType = async (typeId) => {
    const {data} = await $authHost.delete(`types/delete/${typeId}`)
    return data
}

export const getOneType = async (typeId) => {
    const data = await $authHost.get(`types/${typeId}`)
    return data
}

export const getTypes = async (dispatch) => {
    const data = await $authHost.get('types')
    dispatch(getAllTypes(data.data))
    return data
}