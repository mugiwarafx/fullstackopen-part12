const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const todosRouter = require('./routes/todos')

const app = express()

app.use(cors())

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.use('/todos', todosRouter)

app.listen(8000, () => console.log('Server is up and running'))

module.exports = app
