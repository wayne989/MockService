module.exports = function(req,res,next) {
    console.log("request body: " + JSON.stringify(req.body));
    console.log("request parameters: " + JSON.stringify(req.query));
    console.log("headers: " + JSON.stringify(req.headers));
    next();
  }