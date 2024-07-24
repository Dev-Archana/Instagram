/* const http = require("http");

const server = http.createServer((req, res) => {
    console.log("server running");
    res.end("Hey I am done");
});
server.listen(5000, "localhost", () => {
    console.log("server running on given port !");
}) 
    
In this code we used built in module of http now with the help of express we will create our own module and build the server

const express = require("express");
const app = express();
const PORT = 5000;
const data = require("./data.js");
const cors = require("cors");

app.use(cors());
app.get('/', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`server is running on port number ` + PORT);
});

*/
const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
/* i am accessing url from keys.js module */
const mongoURL = require("./keys");
/* to access database schema */
require("./models/model");

/* first data need to be parse to json first later it should be used in the project so we are writing below line  */

app.use(express.json());
app.use(require('./routes/auth'));

mongoose.connect(mongoURL);
mongoose.connection.on("connected", () => {
    console.log("connected");
})
mongoose.connection.on("Error", () => {
    console.log("Error");
})

app.listen(PORT, () => {
    console.log("Server Is Running On port " + PORT);
})