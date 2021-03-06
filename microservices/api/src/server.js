var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');
require('request-debug')(request);

var hasuraExamplesRouter = require('./hasuraExamples');

var server = require('http').Server(app);

router.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', hasuraExamplesRouter);

app.get('/', (req, res) => {
  res.send('Edit the file at <code>microservices/api/src/server.js</code> and git-push to deploy!');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
