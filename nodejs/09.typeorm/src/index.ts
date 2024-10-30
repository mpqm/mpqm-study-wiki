import express from 'express';
import morgan  from 'morgan';
import { AppDataSource } from './data-source';
import { User } from './entity/User';

const app = express()
app.use(express.json())
app.use(morgan('dev')) // dev, short, combined, common

app.get("/", (_,res) => res.send("running!"))

AppDataSource
    .initialize()
    .then(() => {console.log("postsql initialized!")})
    .catch((err) => {console.error(err)})

app.post('/users', async(req, res) => {
    const user = await AppDataSource.getRepository(User).create(req.body)
    console.log(user)
    const results = await AppDataSource.getRepository(User).save(user);
    return res.send(results)
})

app.get('/users', async(req, res) => {
    const results = await AppDataSource.getRepository(User).find()
    return res.send(results)
})

app.get('/users/:id', async(req, res) => {
    const results = await AppDataSource.getRepository(User).findOneBy({id: Number(req.params.id)})
    return res.send(results)
})

app.put('/users/:id', async(req, res) => {
    const user = await AppDataSource.getRepository(User).findOneBy({id: Number(req.params.id)})
    AppDataSource.getRepository(User).merge(user, req.body)
    const result = await AppDataSource.getRepository(User).save(user)
    return res.send(result)
})

app.delete('/users/:id', async(req, res) => {
    const result = await AppDataSource.getRepository(User).delete({id: Number(req.params.id)})
    return res.send(result)
})

let port =4000
app.listen(port, async() => { console.log(`Server Running on http://localhost:${port}`) }) 
