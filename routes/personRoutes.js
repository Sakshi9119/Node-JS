const express = require("express");
const router = express.Router();

//model
const Person = require("./../models/person");

//post route to add person
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    //create new person doc using mongoose model newPerso is obj
    const newPerson = new Person(data);
    //save new person to db
    const response = await newPerson.save();
    console.log("Datas Saved!");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

//get method to get person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Retrived!");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server error" });
  }
});

//parameterized url:
router.get("/:workType", async (req, res) => {
  //var name: workType
  try {
    const workType = req.params.workType; //Extract worktype from url param
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType }); //passing work in worktype
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extarct id from url param
    const updatedPersonData = req.body; //update data for the perosn

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //return updated doc
        runValidators: true, //run mongoose validn
      }
    );
    if (!updatedPersonData) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data Updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data Deleted!");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server error" });
  }
});

module.exports = router;
