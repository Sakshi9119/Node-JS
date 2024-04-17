const mongoose = require("mongoose");

//Define mongodb conn url
const mongoURL = "mongodb://localhost:27017/hotels";

//setuo mongodb conn
mongoose.connect(mongoURL);

//get default coonn:
//Mongoose maintains a default conn obj representing the mongoDB conn
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server!");
});

db.on("error", () => {
  console.log("Error!");
});

db.on("disconnected", () => {
  console.log("Failed Connect!");
});

//Export db conn:
module.exports = db;
