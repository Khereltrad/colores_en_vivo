const express = require("express");
const session = require('express-session');
var flash = require('connect-flash');

const app = express();
const port = 8000;
// const { Socket } = require("dgram");
// const { on } = require("events");

app
.use( express.json() )
.use( express.urlencoded({ extended: true }) )
// .get("/",(req,res) =>    {res.json({message: "Hola ^^"});    })
.use(express.static(__dirname+"/public"))
.use(require('./routes/routes'))   
.set('views', __dirname + '/views')
.set('view engine', 'ejs')
.use(flash());


const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );
const io = require('socket.io')(server);

io.on('connection', function(socket){

    socket
    .on("cambiar_color", function (data) {
        io.emit("color", data);
    })       
}); 

io.on("connection", function (socket) {
    socket.on("green", function (data) {
      io.emit("respuesta_green", { color: "green" });
    });
  });
  
  io.on("connection", function (socket) {
    socket.on("blue", function (data) {
      io.emit("respuesta_blue", { color: "blue" });
    });
  });
  
  io.on("connection", function (socket) {
    socket.on("pink", function (data) {
      io.emit("respuesta_pink", { color: "pink" });
    });
  });