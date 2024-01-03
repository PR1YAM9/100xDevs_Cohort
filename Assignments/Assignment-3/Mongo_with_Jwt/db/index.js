const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "Mongo URI"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

const UserSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  course: [{ type: mongoose.Schema.Types.ObjectId }],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
