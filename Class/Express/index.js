const express = require('express')//import express
const app = express()
const port = 3000//default port
//.env in big companies

app.get('/', (req, res) => {// '/' represent routes
  res.send('Hello World!')
})
app.get('/about', (req, res) => {// '/' represent routes
  res.send('Welcome to about page!')
})

app.get('/project', (req, res) => {// '/' represent routes
  res.send('Welcome to project page!')
})

app.get('/contact', (req, res) => {// '/' represent routes
  res.send('Welcome to contact page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


