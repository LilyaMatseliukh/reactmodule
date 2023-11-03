const baseURL = 'https://jsonplaceholder.typicode.com';
const post = '/post';
const urls = {
    post: {
        post: post,
        byId: (id) => `${post}/${id}`
    }
}

export {baseURL, post, urls};