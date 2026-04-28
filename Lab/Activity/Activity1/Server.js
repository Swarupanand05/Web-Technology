// 1) build a small project by using user api
// add user
// get user
// update user
// delete user 
// using express

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public')) // serve HTML

let users = []

// ADD USER
app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  }
  users.push(user)
  res.json(user)
})

//  GET USERS
app.get('/users', (req, res) => {
  res.json(users)
})
//find user by id
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);  // Get id from request parameters
    const user = users.find(u => u.id === userId);  // Check if user exists
    if (user) {
        res.json(user);  // Send user data in JSON format
    } else {
        res.status(404).json({ message: "User not found" });  // Send error message if user not found
    }
});


//  UPDATE USER
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id)

  if (user) {
    user.name = req.body.name
    user.email = req.body.email
    res.json(user)
  } else {
    res.send("User not found")
  }
})

//  DELETE USER
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id)
  res.send("Deleted")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})