const db = require('../models');

// Get all users from the database
exports.getAllUsers = async () => {
  try {
    return db.User.findAll();
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

// Create a new user in the database
exports.createUser = async (userData) => {
  try {
    return db.User.create(userData);
  } catch (error) {
    throw new Error('Error creating user');
  }
};