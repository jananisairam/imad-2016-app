var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title: 'Article one Janani Kannan',
    heading: 'Article-One',
    date: 'sep 5 2016',
    content: `
    <p>
    Article one is requested
    </p>
    <p>
    Article one is served here!
    </p>
    <p>
    This is the content for my first article
    </p>`
    };
app.get('/', function (req,res){
    res.sendFile(path.join(__dirname,'ui','index.html'));
});
app.get('/article-one', function (req,res){
    res.send('article one is requested!');
});
app.get('/article-two', function (req,res){
    res.send('article two is requested!');
});
app.get('/article-three', function (req,res){
    res.send('article three is requested!');
});
app.get('/ui/style.css', function (req,res){
    res.sendFile(path.join(__dirname,'ui','style.css'));
});

app.get('/ui/madi.png', function (req,res){
    res.sendFile(path.join(__dirname,'ui','madi.png'));
});


var port = 8080;
app.listen(8080, function(){
    console.log(`IMAD course app listening on port ${port} !`)
});