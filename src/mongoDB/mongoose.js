const mongoose = require('mongoose');
const keys = require('../config/keys');

module.exports = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to mongo instance');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
