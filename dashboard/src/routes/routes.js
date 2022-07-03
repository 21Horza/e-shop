import { HOME_ROUTE, LOGIN_ROUTE, USERS_ROUTE ,PRODUCTS_ROUTE, TYPES_ROUTE} from "../consts/consts";
import React from 'react';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Types from "../pages/Types";
import Products from "../pages/Products";
import Users from "../pages/Users";
import TypePage from "../pages/TypePage";
import UserPage from "../pages/UserPage";
import ProductPage from "../pages/ProductPage";
import NewUser from "../pages/NewUser";
import NewProduct from "../pages/NewProduct";
import NewType from "../pages/NewType";
import UpdateProduct from "../pages/UpdateProduct";

export const adminRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: LOGIN_ROUTE,
        element: <Login />
    },
    {
        path: USERS_ROUTE,
        element: <Users />
    },
    {
        path: USERS_ROUTE + "/:userId",
        element: <UserPage />
    },
    {
        path: USERS_ROUTE + "/new",
        element: <NewUser />
    },
    {
        path: PRODUCTS_ROUTE,
        element: <Products />
    },
    {
        path: PRODUCTS_ROUTE + "/:productId",
        element: <ProductPage />
    },
    {
        path: PRODUCTS_ROUTE + "/new",
        element: <NewProduct />
    },
    {
        path: PRODUCTS_ROUTE + "/new/:productId",
        element: <UpdateProduct />
    },
    {
        path: TYPES_ROUTE,
        element: <Types />
    },
    {
        path: TYPES_ROUTE + "/:typeId",
        element: <TypePage />
    },
    {
        path: TYPES_ROUTE + "/new",
        element: <NewType />
    },
]