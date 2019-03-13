var numerosity = require('d3-numerosity');
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    //res.status(200).json({sum: numerosity.create(1,2)})
    res.status(200).json({sub: numerosity.sub.sub(1,2)})
});
app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});