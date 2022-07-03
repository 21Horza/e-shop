import { HOME_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE, CART_ROUTE, AUTH_ROUTE} from "../consts/consts";
import React from 'react';
import Home from "../pages/Home"
import ProductList from "../pages/ProductList"
import Authorization from "../pages/Authorization"
import Cart from "../components/Cart"
import ProductPage from "../pages/ProductPage";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: AUTH_ROUTE,
        element: <Authorization />
    },
    {
        path: PRODUCTS_ROUTE + '/:type',
        element: <ProductList />
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        element: <ProductPage/>
    },
    {
        path: CART_ROUTE,
        element: <Cart />
    }
]