const posts = [
    {
        id: 'post1',
        title: 'first post',
        description: 'first post',
        comments: [{
            id: 'comment1',
            text: 'first comment',
            likes: 1
        }]
    },
    {
        id: 'post2',
        title: 'second post',
        description: 'second post',
        comments: []
    }
]

function getAllPosts() {
    return posts
}

function getPostById(id) {
    return posts.find((post) => {
        return post.id === id;
    })
}

function addNewPost(id, title, description) {
    const newPost = {
        id,
        title,
        description,
        comments: []
    }
    posts.push(newPost);
    return newPost
}

module.exports = {
    getAllPosts,
    getPostById,
    addNewPost
}