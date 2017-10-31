/**
 * Basic web nodeJS app listening port 8013, built using express + ejs templates that serves 4 urls and error page
 * 
 * Dependencies; node installed, express and ejs npm packages installed
 * 
 * Start the app
 * node hello_express_usingTemplateengine_ejs
 */
var express = require('express');
var app = express();

// NOTE_1 ilker - by default express looks for templates in directory "./views", so I do not need to set "views" like below
// app.set('views', './views'); // specify the views dir
// NOTE_2 ilker - due to putting the extension .ejs, I do not have to set "view engine" like below
// app.set('view engine', 'ejs'); // specify template engine
// NOTE_3 ilker - below allows you to use pure html templates ending with extension .html
app.engine('html', require('ejs').renderFile);

// routes
// 1) set root route
app.get('/', function(req, res) {
    var data2template = {
        title: 'Hello express with ejs',
        name: 'ilker',
        lastname: 'kiris'
    };
    res.render('index.ejs', data2template);
});
// 2) set records route
app.get('/records', function(req, res) {
    var data2template = {
        title: 'Records page',
        numberOfRecords: 123,
        results: [
            { recordId: 1, recordTitle: 'title_1' },
            { recordId: 2, recordTitle: 'title_2' },
            { recordId: 3, recordTitle: 'title_3' }
        ]
    };
    res.render('records.ejs', data2template);
});
// 3) set record detail route for record with id
app.get('/records/:recordId', function(req, res) {
    res.send('<h1>' + req.params.recordId + '</h1>');
});
// 4) set about route
app.get('/about', function(req, res) {
    // res.status(200).render('about'); // NOTE_4 ilker, if no default "view engine" specified above, this will complain; "No default engine was specied and no extension was provided"
    res.status(200).render('about.html'); // NOTE_3b ilker, this is OK if you had done "app.engine('html', require('ejs').renderFile);" before
});
// set everything else to error page
app.get('/*', function(req, res) {
    res.status(404).render('error.ejs', { title: 'Error' });
});

// start express server
var server = app.listen(8013, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});