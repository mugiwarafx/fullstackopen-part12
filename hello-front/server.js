const express = require('express')
const app = express() // create express app

console.log('server.js')

app.use(express.static('build'))

// start express server on port 5000
app.listen(3000, () => {
  console.log('server started on port 3000')
})
