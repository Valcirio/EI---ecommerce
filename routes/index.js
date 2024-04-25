const express = require('express')
const path = require("path")

const productsRouter = require('./product')
const userRouter = require('./user')

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'))

app.use(productsRouter)
app.use(userRouter)

app.get('/', (req, res)=>{
    res.render('home', {

    })
})

app.listen(3000, ()=>{
    console.log('in progress...')
})