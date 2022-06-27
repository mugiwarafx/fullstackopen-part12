const express = require('express')
const { Todo } = require('../mongo')
const router = express.Router()

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos)
})

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  })
  res.send(todo)
})

const singleRouter = express.Router()

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params

  console.log('findByIdMiddleware id', id)
  req.todo = await Todo.findById(id)
  console.log('findByIdMiddleware req.todo', req.todo)
  if (!req.todo) {
    console.log('todo not found')
    return res.sendStatus(404)
  }

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200)
})

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const todo = req.todo
  console.log('/todos/:id todo', req.todo)
  return res.send(todo) // Implement this
})

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const todo = req.todo
  todo.text = req.body.text
  todo.done = req.body.done
  todo.save((err, t) => {
    if (err || !t) {
      return res.status(400).json({
        error: 'something went wrong while updating',
      })
    }
    res.json(t)
  })
})

router.use('/:id', findByIdMiddleware, singleRouter)

module.exports = router
