import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TodosPage from "../pages/todos-page/TodosPage";
import AlbumsPage from "../pages/albums-page/AlbumsPage";
import CommentsPage from "../pages/comments-page/CommentsPage";

const routes = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: 'todos',
                element: <TodosPage/>
            },
            {
                path: 'albums',
                element: <AlbumsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            }
        ]
    }
]);

export {routes};