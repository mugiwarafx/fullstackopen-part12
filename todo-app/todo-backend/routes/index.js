const express = require('express')
const router = express.Router()
const redis = require('../redis')

const configs = require('../util/config')

console.log('Tao of programming')
console.log('index/redis', redis)

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits,
  })
})

let addTodoCounter = 0

router.get('/addatodo', async (req, res) => {
  await redis.setAsync('todo counter', `${addTodoCounter++}`)
  const value = await redis.getAsync('todo counter')

  res.send({
    endpoint: '/addatodo',
    value: `${value}`,
  })
})

router.get('/statistics', async (req, res) => {
  const value = await redis.getAsync('todo counter')
  res.send({
    endpoint: '/addatodo',
    todocounter: `${value}`,
  })
})

module.exports = router
