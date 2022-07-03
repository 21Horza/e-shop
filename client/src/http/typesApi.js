import {$authHost, $host} from "./index";

export const createType = async () => {
    const {data} = await $authHost.post('types/create')
    return data
}

export const deleteType = async () => {
    const {data} = await $authHost.delete(`types/delete`)
    return data
}

export const getAllTypes = async () => {
    const {data} = await $host.get('types')
    return data
}