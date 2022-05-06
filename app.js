const express = require('express');
const app = express();
const port = 2000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const messagesRoute = require('./routes/messages');

// CONNECT TO ONLINE DATABASE
const connect = mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
});
connect.then(
  () => console.log('Connected correctly to MongoDB server'),
  (err) => console.log(err)
);
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELTE', 'UPDATE', 'PUT'],
  })
);
app.use((req, res, next) => {
  res.header({
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': ['GET', 'POST', 'DELETE'],
  });
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', messagesRoute);
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`);
});
