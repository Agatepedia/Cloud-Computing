require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

app.get('/agates', (req, res) => {
  connection.query(
    "SELECT * FROM `agate`.`agates`",
    (error, results, fields) => {
      if(error) throw error;
      res.json(results);
    }
  );
});

app.route('/agates/:jenis')
  .get(function(req, res, next) {
    connection.query(
      "SELECT * FROM `agate`.`agates` WHERE `jenis` LIKE '"+req.params.jenis+"'", req.params.jenis,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

app.get('/status', (req, res) => res.send('Success.'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 8080);
app.listen(8080);
