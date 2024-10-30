const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users.router')
const postsRouter = require('./routes/posts.router')
const productsRouter = require('./routes/products.router')
const PORT = 3000

const app = express()
app.get('*', function(req, res, next) { setImmediate(() => {next(new Error('end point not found'))}) })
app.use(function(error, req, res, next) { res.json({messsage: error.message}) })
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.set('view engine', 'hbs') // 특정 엔진을 템플릿 엔진으로 사용하기 위한 설정
app.set('views', path.join(__dirname, 'views')) // view파일이 존재하는 폴더 명시

mongoose.connect(`Your MongoDB connection string`)
.then(() => console.log('mongodb connected'))
.catch((err) => console.log(err))

app.use((req, res, next) =>{
    const taskStart = Date.now()
    console.log(`task start: ${req.method} ${req.url}`)
    next()
    const taskEnd = Date.now() - taskStart
    console.log(`task end: ${req.method} ${req.baseUrl}${req.url} ${taskEnd}ms`)
})

app.get('/', (req, res) => {
    res.render('index', {
        imageTitle: "It is Cat 2"
    })
})


app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/products', productsRouter)

app.listen(PORT, () => { console.log(`Runninng on ${PORT}`) })
