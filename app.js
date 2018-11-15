var webServer = require('./webHandler');
var studentRoute = require('./studentRouteHelper');
var bodyParser = require('body-parser');
var express = require('express'),
    app = express(),
    port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

studentRoute(app);
webServer.initialize(app,express);

app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});