import {$authHost} from "./index";
import { getAllProducts } from "../redux/productRedux";

export const createProduct = async (product) => {
    console.log(product)
    const {data} = await $authHost.post('items/create', product)
    return data
}
export const updateProduct = async (productId, product) => {
    const {data} = await $authHost.put(`items/update/${productId}`, product) // not sure
    return data
}
export const deleteProduct = async (itemId) => {
    const {data} = await $authHost.delete(`items/delete/${itemId}`)
    return data
}

export const getOneProduct = async (itemId) => {
    const {data} = await $authHost.get(`items/${itemId}`)
    return data;
}

export const getProducts = async (dispatch) => {
    const data = await $authHost.get('items')
    dispatch(getAllProducts(data.data))
    return data
}
