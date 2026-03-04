/* Nodejs is a runtime environment that lets you to run js code outside browser.
- Built on chrome's v8 js engine.
- Used to create fast & scalable web application .
*/
/* EXpressjs is a minimal and flexible web framework fo nodejs
   It helps to handle routes, middleware and htttp request easily
   makes backend system fast and simple.
use :
   Simplifies server creation in nodejs
   It offers powerful features like routing , middleware, static file serving, error handling.

*/
/* NPM - Node Package Manager
- It is a tool to install packages or libraries from the nodejs ecosystem.
*/
//
//npm init - it asked you questions like what packages you want and then it create File. 
 
// Interview question
/* What is package.json?
  difference between package.json and package-Lock.json.
   difference between Dev dependancies and simple dependancies. 
  */
 /*  const port = 3000;
 it is local host 

 Activivty : find uses of https = get, put , post , delete , patch with real time example.
 */

/* const express = require('express')
 const app = express()
 const port = 3000;

 app.get('/',(req,res) => {
    let time1 = new Date();
    res.send(`Hello World <br> Current Date & Time: ${time1}`)
   
 })

 app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/time', (req, res) => {
   let time1 = new Date();
  
res.json({
   message: "Hello World",
   time: time1
})
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
