const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    karma: {
      type: Number,
      default: 0,
    },
    followerCount: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Array,
      default: [],
    },
    countFollowing: {
      type: Number,
      default: 0,
    },
    following: {
      type: Array,
      default: [],
    },
    views: Number,
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
