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

router.get('/addatodo', async (req, res) => {
  const value = await redis.getAsync('todocounter')
  let counter = 0
  counter = value
  counter++
  console.log('/addtodo/counter', counter)
  await redis.setAsync('todocounter', `${counter}`)

  res.send({
    endpoint: '/addatodo',
    value: `${counter}`,
  })
})

router.get('/statistics', async (req, res) => {
  const value = await redis.getAsync('todocounter')
  res.send({
    endpoint: '/addatodo',
    todocounter: `${value}`,
  })
})

module.exports = router
