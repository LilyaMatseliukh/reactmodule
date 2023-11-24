import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'todos'},
            {path: 'albums'},
            {path: 'comments'}
        ]}
]);

export {routes};