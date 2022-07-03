import {$authHost, $host} from "./index";

export const createProduct = async (formData) => {
    const {data} = await $authHost.post('items/create', formData)
    return data
}
export const updateProduct = async ({itemId,formData}) => {
    const {data} = await $authHost.put(`items/update/${itemId}`, formData) // not sure
    return data
}
export const deleteProduct = async (itemId) => {
    const {data} = await $authHost.delete(`items/delete/${itemId}`)
    return data
}

export const getOneProduct = async (itemId) => {
    const {data} = await $host.get(`items/${itemId}`)
    return data;
}

export const getAllProducts = async (type) => {
    if(type) {
        const {data} = await $host.get(`items/?type=${type}`)
        return data
    } else {
        const {data} = await $host.get('items')
        return data
    }
}
