require('./models/User');
require('./models/Track');

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const mongoConnection = require('./mongoDB/mongoose');
const requiredAuth = require('./middlewares/requireAuth');

const app = express();

mongoConnection();

app.use(bodyParser.json());

app.use(authRoutes);
app.use(trackRoutes);

app.get('/', requiredAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
