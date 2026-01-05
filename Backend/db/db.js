const mongoose = require('mongoose');

function connectToDb() {
  return mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log('Connected To DB');
    })
    .catch((err) => {
      console.error('DB connection failed:', err);
    });
}

module.exports = connectToDb;
