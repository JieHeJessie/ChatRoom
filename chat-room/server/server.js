const express = require('express')

const userRouter = require('./user')

const mongoose = require('mongoose')

// connect  mongo
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
	console.log('mongo connect success')
})

const app = express()

app.use('/user',userRouter)
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})



