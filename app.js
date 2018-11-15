var studentRoute = require('./studentRouteHelper');
var express = require('express'),
    app = express(),
    port = process.env.port || 3000;
    
studentRoute(app);
app.use(express.static(__dirname + '/static'));

app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});