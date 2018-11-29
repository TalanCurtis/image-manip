require('dotenv').config()
const express = require('express')
const massive = require('massive')
const bodyParser=require('body-parser');
const fs = require('fs')

const app = express()

// Destructuring .env file
const { SERVER_PORT, CONNECTION_STRING} = process.env

// Database Connection
massive(CONNECTION_STRING).then(db => {console.log('Database up'); app.set('db', db)})

// Top Level middleware
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())


// Controller Imports
const aTestController = require('./controllers/aTestController')
const customProductController = require('./controllers/customProductController')

// Endpoints
//// boilerplate endpoints CRUD
app.get('/api/test', (req, res)=>{
    const testResponse = "Hello"
    console.log(testResponse)
    res.status(200).send(testResponse)
});
app.get('/api/test2', aTestController.testGet);
app.get('/api/users', aTestController.getAllUsers);
app.post('/api/user', aTestController.createUser);
app.put('/api/user', aTestController.updateUser);
app.delete('/api/user', aTestController.deleteUser);

//// custom products

app.get('/api/cp', customProductController.testGet);
app.get('/api/cp', customProductController.getAllCustomProduct);
app.post('/api/cp', customProductController.createCustomProduct);
app.put('/api/cp', customProductController.updateCustomProduct);
app.delete('/api/cp', customProductController.deleteCustomProduct);

app.post('/api/makeDir', (req, res)=>{
    console.log("req ------------------------", req.body.directory)
    // console.log("~")
    fs.existsSync("")
    fs.
    fs.mkdirSync("./AAA")
    res.status(200).send("done")
});

app.get('/api/photoshop', (req, res)=>{
    const testResponse = "Hello"
    console.log(testResponse)
    res.status(200).send(testResponse)
});

app.post('/api/processFiles', (req, res) => {
    console.log("req", req.body)
    res.status(200).send(req.body)
})

// Launch Server
app.listen(SERVER_PORT, () => (console.log(`boiling on port: ${SERVER_PORT}`)))

