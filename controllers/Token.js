var fs = require('fs');
let express = require('express');
let router = express.Router();
var fileData = ''; 
//Open a file on the server and return it's content:
fs.readFile('./resource/token.json', function(err, data){
    fileData = data;
});

router.post('/token',
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(fileData);
        res.end();
        console.log("sending... " + fileData);
    }
);

module.exports = router;