const Sequelize = require('sequelize');
const config = require('../../config/config');
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Initialize Sequelize with the environment configuration
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

const db = {};

// Store Sequelize and sequelize instances in the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import the User model
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;