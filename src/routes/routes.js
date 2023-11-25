import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import TodosPage from "../pages/todos-page/TodosPage";
import AlbumsPage from "../pages/albums-page/AlbumsPage";
import CommentsPage from "../pages/comments-page/CommentsPage";
import PostsPage from "../pages/posts-page/PostsPage";
import ErrorPage from "../pages/error-page/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true, element: <Navigate to={'todos'}/>
            },
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
            },
            {
                path: 'comments/posts',
                element: <PostsPage/>
            }
        ]
    }
]);

export {routes};