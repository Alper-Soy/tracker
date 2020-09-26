const mongoose = require('mongoose');
const keys = require('../config/keys');

module.exports = () => {
  mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
  });

  mongoose.connection.on('error', (error) => {
    console.error('Error connecting to mongo', error);
  });
};
