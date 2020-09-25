require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const mongoConnection = require('./mongoDB/mongoose');

mongoConnection();

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
