require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const mongoConnection = require('./mongoDB/mongoose');
const requiredAuth = require('./middlewares/requireAuth');

mongoConnection();

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);

app.get('/', requiredAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
