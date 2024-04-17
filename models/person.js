const mongoose = require("mongoose");

//FDefine schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    //enum defines array..here either a persons work can be chef,waiter or manager
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

//create person model:
const Person = mongoose.model("Person", personSchema);
//name of model=Person
module.exports = Person;
