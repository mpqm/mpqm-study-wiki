const path = require('path');

function getPost(req, res){ 
//     res.sendFile(path.join(__dirname, '..', 'public', 'images', 'cats.jpeg'))
    res.render('posts', {
        templateName:'post'
    })
}

module.exports = {
    getPost
}