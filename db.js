const mongoose = require("mongoose");
require("dotenv").config();

//Define mongodb conn url (local URL)
// const mongoURL = "mongodb://localhost:27017/hotels";
const mongoURL = process.env.MONGODB_URL_LOCAL;

//Atlas:
// const mongoURL =
//   "mongodb+srv://Sakshi:Xdk6SY5i9Q0VODNl@nodehotel.ywvxpzf.mongodb.net/";
// const mongoURL = process.env.MONGODB_URL;

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
