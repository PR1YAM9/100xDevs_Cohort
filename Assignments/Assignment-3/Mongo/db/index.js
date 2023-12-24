const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://priyam9maini:pr1yam@cluster0.itrcwku.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String}
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
