const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    postTags: {
      type: Array,
      default: [],
    },
    userName: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      of: Boolean,
      default: 0,
    },
    dislikes: {
      type: Number,
      of: Boolean,
      default: 0,
    },
    projectId: {
      type: String,
      default: "",
    },
    comments: {
      type: Array,
      default: [],
    },
    postText: {
      type: String,
      default: "",
    },
    postTitle: {
      type: String,
      default: "",
      unique: true,
    },
    views: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);
