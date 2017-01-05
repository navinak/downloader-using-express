var express = require('express');
var router = express.Router();

/* GET home page. */
const testFolder = './upload-folder/';
const fs = require('fs');


router.get('/', function(req, res, next) {
    fs.readdir(testFolder, function(err, files) {

        console.log(files);

  res.render('index', { title: 'Express',
      files:files });
    });
});

module.exports = router;
