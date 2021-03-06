var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one': {
    title: 'Article 1 Janani Kannan',
    heading: 'Article One',
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
    }, 
    'article-two': {
    title: 'Article 2 Janani Kannan',
    heading: 'Article Two',
    date: 'sep 10 2016',
    content: `
    <p>
    Article two is requested
    </p>
    <p>
    Article two is served here!
    </p>
    <p>
    This is the content for my second article
    </p>`
    },
    'article-three': {
    title: 'Article 3 Janani Kannan',
    heading: 'Article Three',
    date: 'sep 15 2016',
    content: `
    <p>
    Article three is requested
    </p>
    <p>
    Article three is served here!
    </p>
    <p>
    This is the content for my third article
    </p>`
    }
};
    
    function createTemplate (data) {
        var title = data.title;
        var date = data.date;
        var heading = data.heading;
        var content = data.content; 
    var htmlTemplate = `
    <html>
      <head>
         <title> ${title} </title>
         <meta name="viewport" content= "width-device-width",intial-scale-1'/>
         <link href="ui/style.css" rel="stylesheet" />
         </head>
         <body>
         <div class="container">
         <div>
            <a href="/">HomePage</a>
            </div>
            <hr/>
            <h3> ${heading} </h3>
            <div> ${date} </div>
            <div> ${content} </div>
            </div>
            </body>
            </html>
            `;
            return htmlTemplate;
}
            
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname,'ui','index.html'));
});
var counter = 0;
app.get('/counter', function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
//articleName == article-one
//articles[articleName] == {} content objecct for article one
var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));  
});

app.get('/ui/style.css', function (req,res){
    res.sendFile(path.join(__dirname,'ui','style.css'));
});

app.get('/ui/main.js', function (req, res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/madi.png', function (req, res){
    res.sendFile(path.join(__dirname,'ui','madi.png'));
});
var names = [];
app.get('/submit-name', function (req, res){
    //get the name from request
    var name;//TODO
    names.push(name);
    res.send(names);//TODO
});


var port = 8080;
app.listen(8080, function(){
    console.log(`IMAD course app listening on port ${port} !`);
});