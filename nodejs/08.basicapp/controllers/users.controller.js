const model = require('../models/users.model')

function getUsers(req, res) {
    res.send(model)
}

function getUserById(req, res) {
    const userId = Number(req.params.userId)
    const user = model[userId]
    if (user) {res.json(user)}
    else {res.sendStatus(404)}
}

function postUser(req, res) {
    if(!req.body.name) { return res.status(400).json({ err: "Missing user name"}) }
    const newUser = {
        name: req.body.name,
        id: users.length
    }
    model.push(newUser)
    res.json(newUser)
}

module.exports = {
    getUsers,
    getUserById,
    postUser
}