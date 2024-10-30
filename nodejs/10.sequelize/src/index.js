const express = require("express")
const db = require("./models")
const User = db.users;
const app = express();

app.use(express.json())
// db.sequelize.sync({force:true}).then(() => { console.log('db drop and sync reset') }) // 시작할때마다 db초기화

app.post('/users', (req, res) => {
    const { firstName, lastName, isAdult } = req.body;
    const user = { firstName, lastName, isAdult}
    console.log(user)
    User.create(user)
    .then(data => {res.send(data)})
    .catch(err => res.status(500).send({message: err.message || 'user create error'}))
})

app.get("/users", (req, res) => {
    User.findAll()
        .then(data => {res.send(data)})
        .catch(err => {res.status(500).send({message: err.message || "users read error"})})
})

app.get("/users/:id", (req, res) => {
    User.findByPk(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else res.status(404).send({message: `can't find User with id ${req.params.id}`})
        })
        .catch(err => {res.status(500).send({message: err.message || `user ${req.params.id} read error`})})
})

app.put("/users/:id", (req, res) => {
    User.update(req.body, {where:{id: req.params.id}})
        .then(num => {
            if (num == 1) res.send(`User ${req.params.id} updated success`)
            else res.send({message: `can't update User with id ${req.params.id}`})
        })
        .catch(err => {res.status(500).send({message: err.message || `user ${req.params.id} update error`})})
})

app.delete("/users/:id", (req, res) => {
    User.destroy({where:{id: req.params.id}})
        .then(num => {
            if (num == 1) res.send(`User ${req.params.id} deleted success`)
            else res.send({message: `can't delete User with id ${req.params.id}`})
        })
        .catch(err => {res.status(500).send({message: err.message || `user ${req.params.id} update error`})})
})

const port = 4000
app.listen(port, () => {console.log(`Server Running on http://localhost:${port}`)})