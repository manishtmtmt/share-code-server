const { connect } = require("mongoose");

const connectDB = connect(process.env.MONGODB_URL);

module.exports = connectDB;
