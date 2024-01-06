



import {
    createBrowserRouter,

} from "react-router-dom";
import "../src/index.css";
import "../src/App.css";

import Main from "../src/layouts/Main";
import Home from "../src/Pages/Home";
import Clothes from "../src/Pages/Clothes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/clothes',
                element: <Clothes></Clothes>
            }

        ]

    }
]);