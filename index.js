const express = require('express')
const cors = require('cors')
const app = express()
const port = 9999
const messages = require('./messages')
app.use(cors())

app.get('/:id', (req, res) => {
  console.log(req.params)
  const { id } = req.params
  res.send(messages.responses.find(response => response.id === id))
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.get('/authorization', (req, res, next) => {
  res.send({ body: req.body, params: req.params, query: req.query })
})

app.post('/authorization', (req, res, next) => {
  res.send({ body: req.body, params: req.params, query: req.query, method: 'post'})
})

app.put('/authorization', (req, res, next) => {
  res.send({ body: req.body, params: req.params, query: req.query, method: 'put' })
})

app.delete('/authorization', (req, res, next) => {
  res.send({ body: req.body, params: req.params, query: req.query, method: 'del' })
})

app.listen(process.env.PORT || port, () => {
  console.log(`listening at http://localhost:${port}`)
})