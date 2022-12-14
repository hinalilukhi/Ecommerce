const mongoose = require("mongoose");
require('dotenv').config();
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_url)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;