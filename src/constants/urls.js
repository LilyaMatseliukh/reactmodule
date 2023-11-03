const baseURL = 'https://jsonplaceholder.typicode.com';
const post = '/posts';
const urls = {
    post: {
        base: post,
        byId: (id) => `${post}/${id}`
    }
}

export {baseURL, post, urls};