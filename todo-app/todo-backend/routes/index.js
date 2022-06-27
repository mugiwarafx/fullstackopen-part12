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
  console.log(1)
  const value = await redis.getAsync('todocounter')
  console.log(2)
  let counter = 0
  console.log(3)
  counter = value
  counter++
  console.log('/addtodo/counter', counter)
  console.log(4)
  await redis.setAsync('todocounter', `${counter}`)
  console.log(5)

  res.send({
    endpoint: '/addatodo',
    value: `${counter}`,
  })
})

router.get('/statistics', async (req, res) => {
  console.log(6)
  const value = await redis.getAsync('todocounter')
  console.log(7)
  res.send({
    endpoint: '/addatodo',
    todocounter: `${value}`,
  })
})

module.exports = router
