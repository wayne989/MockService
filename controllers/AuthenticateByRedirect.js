var fs = require('fs');
let express = require('express');
let router = express.Router();
var xorigin = require('./CrosOrigin');

var fileData = ''; 
//Open a file on the server and return it's content:
fs.readFile('./resource/magicAbacus.json', function(err, data){
    fileData = data;
});

router.get('/magic-abacus',
    function (req, res) {
        xorigin.writeHeader(res);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(fileData);
        res.end();
        console.log("sending... " + fileData);
    }
);

module.exports = router;