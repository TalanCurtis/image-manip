require('dotenv').config()
const express = require('express')
const massive = require('massive')
const bodyParser=require('body-parser');
const fs = require('fs')
const multer = require('multer');

fileFilter = function (req, res, next) {
//   const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/svg+xml"]
//   console.log("i ran", req.files)
//   const files = req.files
//   for (let file in files){
//       for (let i in file){
//           console.log("hello", file)

//       }
//     //   if(!allowedTypes.includes(files[file].mimetype)){
//         // console.log("send error")
//     //   }
//   }
// //   for (let file in req.files){
// //     if(!allowedTypes.includes(file.mimetype)){
// //       console.log("send error")
// //       const error = new Error(" Wrong file type.")
// //       error.code = "LIMIT_FILE_TYPES";
// //       return next( error, false)
// //     } else {
// //       console.log("file good")
// //     }
// //   }
  next(null, true)
}

const upload = multer({
    dest: "./uploads",
    fileFilter
});


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

//  single file upload
// app.post('/api/processFiles', upload.single('file'), (req, res) => {
//     console.log("req", req.file)
//     res.status(200).send(req.file)
// })

// multiple file upload
let cpUpload = upload.fields([{name:"files", maxCount:20}])
app.post('/api/processFiles', cpUpload, (req, res) => {
    res.status(200).send(req.files)
})

// Launch Server
app.listen(SERVER_PORT, () => (console.log(`boiling on port: ${SERVER_PORT}`)))

