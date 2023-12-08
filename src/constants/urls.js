const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    // users,
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },
    posts: {
        byUserId: (userId) => `${users}/${userId}/${posts}`,
        byId: (id) => `${posts}/${id}`
    },
    comments: {
        byPostId: (postId) => `${posts}/${postId}/${comments}`
    }
};

export {baseURL, urls};