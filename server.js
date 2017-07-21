var express = require('express');
var app = express();
var session = require('express-session');
var cors = require('cors');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: false });

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var router = express.Router();
var route = require('./route');

app.use(session({
    secret : 'key',
    cookie: { maxAge: 12 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: true
    })
);

//app.use(cors());

app.use('/', route);


app.listen(8080, function(){
    console.log('server start at 127.0.0.1:8080');
});
