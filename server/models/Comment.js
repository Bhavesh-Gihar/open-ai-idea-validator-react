const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
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
    userId: {
      type: String,
      default: "",
    },
    commentText: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Comment", commentSchema);
