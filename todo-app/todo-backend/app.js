const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const todosRouter = require('./routes/todos')

const app = express()

const port = 8000

app.use(cors())

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.use('/todos', todosRouter)

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})

module.exports = app
