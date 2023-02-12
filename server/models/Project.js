const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      default: "",
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
    collaborators: {
      type: Array,
      default: [],
    },
    ProjectText: {
      type: String,
      default: "",
    },
    ProjectTitle: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
