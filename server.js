var express = require('express');
var app = express();

var eaw = require('eastasianwidth');
var SD = require('./sd');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api/sd', function (req, res) {
    var text = req.query.text || 'Sudden Death';
    var sd = new SD(text, eaw.length(text));
    var sdtext = sd.createAA();
    res.json({
        result: sdtext
    });
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);