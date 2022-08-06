var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;

app.use(express.static(__dirname + '/public'));
 
// Without middleware
app.get('/', function(req, res){

var options = {
        root: path.join(__dirname)
    };
     
    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } 
    });
});
 
app.listen(process.env.PORT || PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});