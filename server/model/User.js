const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
