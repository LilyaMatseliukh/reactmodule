import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CommentsPage from "./pages/CommentsPage";
import {usersService} from "./services/usersService";
import {postsService} from "./services/postsService";
import {commentsService} from "./services/commentsService";

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
                element: <UsersPage/>,
                loader: () => usersService.getAll()
            },
            {
                path: 'users/:userId',
                element: <UserDetailsPage/>,
                loader: ({params: {userId}}) => usersService.getById(userId),
                children: [
                    {
                        path: 'posts/:userId',
                        element: <PostsPage/>,
                        loader: ({params: {userId}}) => postsService.getByUsedId(userId)
                    }
                ]
            },
            {
                path: 'users/:userId/posts/:userId/:id',
                element: <PostDetailsPage/>,
                loader: ({params: {id}}) => postsService.getById(id),
                children: [
                    {
                        path: 'comments/:id',
                        element: <CommentsPage/>,
                        loader: ({params: {id}}) => commentsService.getByPostId(id)
                    }
                ]
            }
        ]
    }
]);

export {router};