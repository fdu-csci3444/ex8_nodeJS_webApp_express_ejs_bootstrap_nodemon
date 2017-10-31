/**
 * Basic web nodeJS app listening port 8012, built using express, that returns content type text/html 'Hello express - ilker' 
 * 
 * Dependencies; node installed, express npm package installed
 * 
 * Start the app
 * node hello_express_basic
 */
var express = require('express');
var app = express();

// set root route
app.get('/', function(req, res) {
    res.send('Hello express - ilker - root url');
});

// start express server
var server = app.listen(8012, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});