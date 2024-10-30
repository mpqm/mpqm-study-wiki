const comments = [
    {
        id: 'comment1',
        text: 'first comment',
        likes: 1
    },
    {
        id: 'comment2',
        text: 'second comment',
        likes: 10
    }
]

function getAllComments() {
    return comments
}

function getCommentsByLikes(minLikes) {
    return comments.filter(comment => {
        return comment.likes >= minLikes
    })
}

function addNewComment(id, text) {
    const newComment = {
        id,
        text,
        likes: 0
    };
    comments.push(newComment)
    return newComment
}

module.exports ={
    getAllComments,
    getCommentsByLikes,
    addNewComment
}