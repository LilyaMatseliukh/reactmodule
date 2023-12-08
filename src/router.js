import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CommentsPage from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'users'}/>
            },
            {
                path: 'users',
                element: <UsersPage/>
            },
            {
                path: 'users/:userId',
                element: <UserDetailsPage/>,
                children: [
                    {
                        path: 'posts',
                        element: <PostsPage/>
                    }
                ]
            },
            {
                path: 'users/:userId/posts/:id',
                element: <PostDetailsPage/>,
                children: [
                    {
                        path: 'comments',
                        element: <CommentsPage/>
                    }
                ]
            }
        ]
    }
]);

export {router};