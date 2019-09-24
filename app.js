var express = require('express');
var app = express();

app.get('/', (request, response)=>{
    response.send('Hello World');
});

app.listen(8000, (req, res)=>{
    console.log("Server started at 8000");
});

