// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// //FDefine schema
// const personSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   work: {
//     type: String,
//     //enum defines array..here either a persons work can be chef,waiter or manager
//     enum: ["chef", "waiter", "manager"],
//     required: true,
//   },
//   mobile: {
//     type: String,
//     require: true,
//   },
//   email: {
//     type: String,
//     require: true,
//     unique: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   username: {
//     required: true,
//     type: String,
//   },
//   password: {
//     required: true,
//     type: String,
//   },
// });

// personSchema.pre("save", async function (next) {
//   const person = this;
//   if (!person.isModified("password")) return next();

//   try {
//     //hash pass genern
//     const salt = await bcrypt.genSalt(10);
//     //hash pass
//     const hashedPassword = await bcrypt.hashedPassword(person.password, salt);
//     //override plain pass with hashed one
//     person.password = hashedPassword;

//     next();
//   } catch (err) {
//     return next(err);
//   }
// });

// personSchema.methods.comparePassword = async function (candidatePassword) {
//   try {
//     const isMatch = await bcrypt.compare(candidatePassword, this.password);
//     return isMatch;
//   } catch (err) {}
// };

// //create person model:
// const Person = mongoose.model("Person", personSchema);
// //name of model=Person
// module.exports = Person;

// ..

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the Person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

personSchema.pre("save", async function (next) {
  const person = this;

  // Hash the password only if it has been modified (or is new)
  if (!person.isModified("password")) return next();

  try {
    // hash password generation
    const salt = await bcrypt.genSalt(10);

    // hash password
    const hashedPassword = await bcrypt.hash(person.password, salt);

    // Override the plain password with the hashed one
    person.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Use bcrypt to compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

// Create Person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
