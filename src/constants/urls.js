const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
        users,
        byId: (id) => `${users}/${id}`
    },
    posts: {
        posts,
        byId: (id) => `${posts}/${id}`
    },
    comments: {
        comments,
        byId: (id) => `${comments}/${id}`
    }
}

export {baseURL, urls};