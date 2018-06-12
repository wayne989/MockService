let express = require('express');
let router = express.Router();
var Promise = require('promise');
var readFile = Promise.denodeify(require('fs').readFile);
// now `readFile` will return a promise rather than
// expecting a callback
function readJSON(filename, callback){
    // If a callback is provided, call it with error as the
    // first argument and result as the second argument,
    // then return `undefined`. If no callback is provided,
    // just return the promise.
    return readFile(filename, 'utf8')
           .then(JSON.parse)
           .nodeify(callback);
}

router.post('/ReadFile',
    function (req, res) {
        var fileName = './resource/' + req.query.id + '.json';
        console.log("File Name is " + fileName);
        readJSON(fileName).done(filedata =>{
            res.writeHead(200, {'Content-Type': 'application/json'});
            var dataString = JSON.stringify(filedata);
            console.log(dataString);
            res.write(dataString);
            res.end();
        });
    }
);

router.get('/ReadFile',
    function (req, res) {
        var fileName = './resource/' + req.query.id + '.json';
        console.log("File Name is " + fileName);
        readJSON(fileName).done(filedata =>{
            res.writeHead(200, {'Content-Type': 'application/json'});
            var dataString = JSON.stringify(filedata);
            console.log(dataString);
            res.write(dataString);
            res.end();
        });
    }
);
module.exports = router;