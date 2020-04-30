const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const showdown  = require('showdown');
const converter = new showdown.Converter();
let data = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/text', function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
});

router.post('/api/text', function(req, res) {
  data.html = converter.makeHtml(req.body.html);
  res.redirect('/');
});

module.exports = router;
