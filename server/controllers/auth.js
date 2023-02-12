const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

var userLoggedin = null;

//REGISTER
export const regsister = async (req, res) => {
  try {
    //generate new password
    // console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      userName: req.body.userName,
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });
    // console.log(newUser);
    //save user and respond
    userLoggedin = req.body.userName;
    const savedUser = await newUser.save();
    // console.log(savedUser);
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};
// router.post("/register", async (req, res) => {
//   try {
//     //generate new password
//     // console.log(req.body);
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     //create new user
//     const newUser = new User({
//       userName: req.body.userName,
//       fullName: req.body.fullName,
//       email: req.body.email,
//       password: hashedPassword,
//     });
//     // console.log(newUser);
//     //save user and respond
//     userLoggedin = req.body.userName;
//     const savedUser = await newUser.save();
//     // console.log(savedUser);
//     res.status(200).json(savedUser);
//   } catch (err) {
//     res.status(400).json(err);
//     console.log(err);
//   }
// });

//LOGIN
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
    userLoggedin = req.body.userName;
  } catch (err) {
    res.status(500).json(err);
  }
};
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     !user && res.status(404).json("user not found");

//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     !validPassword && res.status(400).json("wrong password");

//     res.status(200).json(user);
//     userLoggedin = req.body.userName;
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = {
//   router,
// };
