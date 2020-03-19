const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const setting = require('./setting')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const ordersRouter = require('./routes/orders')
const filmOrdersRouter = require('./routes/film-orders')
// const planningDeptRouter = require('./routes/planning')

const app = express()

app.use(
  cors({
    // origin: '*',
    origin: setting.origin,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/orders', ordersRouter)
app.use('/film/orders', filmOrdersRouter)

module.exports = app
