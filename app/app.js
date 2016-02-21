/**
 * Created by Asle on 15.02.2016.
 */
var express = require('express');
var path = require('path');
var app = express();




 app.get("/", function(req, res){

     res.sendFile(path.join(__dirname, 'index.html'));
     //res.render('Halla');

     //res.send(index.html);

 });

var server = app.listen(3000, function(){
    console.log("Listen on port 3000");
});