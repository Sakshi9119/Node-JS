//passport:
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//authenticn authorizn
const Person = require("./models/person");

//passport
passport.use(
  new LocalStrategy(async (USERNAME, password, done) => {
    try {
      console.log("Recieved Cred:", USERNAME, password);
      const user = await Person.findOne({ username: USERNAME });
      if (!user) return done(null, false, { message: "Incorrect Username" });

      //   const isPasswordMatch = user.password ===
      const isPasswordMatch = await user.comparePassword(password);
      // password ? true : false;
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "OIncorrect Password" });
      }
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = passport;
