// //Creating server start

// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello world!');
// });
// app.listen(3000);

// //Creating server end

// ****************************

const express = require("express");
const app = express();

//to connect to mongodb server
const db = require("./db");
//This will create db obj

//dotenv:
require("dotenv").config();

// //import routes
// const personRoutes = require('./routes/personRoutes');

//export model:
const Person = require("./models/person");
const MenuItem = require("./models/MenuItem");
//body parser:
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello world!");
});

// app.get('/veg', function (req, res) {
//   res.send('Veg here!');
// });

// app.get('/idli', function (req, res) {
//   var cutomizaIdli = {
//     name: 'Rava Idli',
//     size: '10 cm diam',
//     isSam: true,
//     isChutey: false,
//   };
//   res.send(cutomizaIdli);
// });

//depricated callback:
// app.post('/person', (req, res) => {
//   const data = req.body;
//   // const newPerson = new Person();
//   // newPerson.name = data.name;
//   // newPerson.age = data.age;
//   // newPerson.mobile = data.mobile;
//   // newPerson.email = data.email;
//   // newPerson.address = data.address;
//   // OR
//   const newPerson = new Person(data);
//   //Save
//   // newPerson.save((error, savedPerson) => {
//   //   if (error) {
//   //     console.log('Error Saving Person: ', error);
//   //     res.status(500).send({ error: 'Internal server error' });
//   //   } else {
//   //     console.log('Data saved Successfully!');
//   //     res.status(200).json(savedPerson);
//   //   }
//   // });
//   //****************callback depricated use: ssync await */
// });

// // real post
// app.post('/person', async (req, res) => {
//   try {
//     const data = req.body;
//     //create new person doc using mongoose model
//     const newPerson = new Person(data);
//     //save new person to db
//     const response = await newPerson.save();
//     console.log('Datas Saved!');
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error!' });
//   }
// });

// menuItems:
// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenu = new MenuItem(data);
//     //save new person to db
//     const response = await newMenu.save();
//     console.log("Datas Saved!");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error!" });
//   }
// });

// //get method to get person
// app.get('/person', async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log('Data Retrived!');
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server error' });
//   }
// });

//
// app.get("/menu", async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log("Data Retrived!");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server error" });
//   }
// });

// //parameterized url:
// app.get('/person/:workType', async (req, res) => {
//   //var name: workType
//   try {
//     const workType = req.params.workType; //Extract worktype from url param
//     if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
//       const response = await Person.find({ work: workType });
//       console.log('response fetched');
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: 'Invalid Work Type' });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server error' });
//   }
// });

// As we shiftef=d to routers
// Import router files
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port 3000...!");
});
//comment
