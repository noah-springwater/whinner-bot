'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.load();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;

const server = app.listen(8080, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

app.get('/', (req, res) => {
  res.send("hello")
});

app.post('/', (req, res) => {
  let text = req.body.text;

  let data = {
    response_type: 'in_channel',
    text: 'Today, my friend, you are a Winner',
  };

  res.json(data);
});
