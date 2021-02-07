const express = require('express')
const app = express()

app.get('/test/number/:number', (req, res) => {
  res.send(`The age is: ${req.params.numbers}`)
})

app.listen(3000, () => {
  console.log('App exercise_1 is running on port 3000')
})
