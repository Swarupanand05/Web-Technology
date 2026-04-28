//Node js-Node js is a runtime environment that lets run javascript on server side.build on chromes v8 javascript engine(run code outside the browser)
//used to create fast,scalable web application

//Express js-it is a minimal and flexible web framework for node js.
//It helps to handle routes,middlewares and http requests easily.
//makes backend development fast and simple.

//why we use express js
//simplifies server creation in node js.it offers powerfull features like routing,middleware,static file serving,error handling.

//NPM-Node Package Manager
//npm is a tool to install packages or libraries from the node js ecosystem.

//npm init-asking which package you want
//npm init -y-without asking any questions directly install the packages
//when install express creating node modules and package lock.json

//what is package.json,difference between package.json and package-lock.json
//package.json contains configuration-project name,version,description,main file name(exp05.js)
//package-lock.json-same as package.json but it gives detailed information,contains dev dependency,dependency
//dev dependency used for developers and dependency used for building purpose(see difference in detail)

//activity-see http methods real-time eg

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Welcome to my Express server")
})

app.get('/time', (req, res) => { 
    let curtime = new Date();

    res.json({
        message: "Hello World",
        time: curtime
    });
});

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})



