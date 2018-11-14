
// const http = require('http');
// const requestHelper = require('./requestHelper');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;
// //test commit
// const server = http.createServer((request,response)=>{  
//   response.statusCode = 200;

//   const url = request.url;  
//   const requestPath = requestHelper.transformRequestToFilePath(url);

//   fs.readFile(requestPath,function (error, data) {
//     if (data!==undefined){
//       var pageContent = data.toString();        
//       var contentType = requestHelper.getContentTypeFromUrl(url);
//       response.setHeader('Content-Type', contentType);
//       response.end(pageContent);
//     }    
//   });
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var studentRoute = require('./studentRouteHelper');
var express = require('express'),
    app = express(),
    port = process.env.port || 3000;

// app.get('/account',(req,res,next)=>{
//   res.json({
//     "AccountName": "Linh",
//     "Balance": 113.34
//   });
// });

// app.post('/register',(req,res,next)=>{
//   var requestHeader  = req.headers;
//   var accountName = requestHeader["account"];
//   var isSuperUser = requestHeader["issuperuser"] === true || requestHeader["issuperuser"]==="true";
//   res.send({
//     "result": "ok",
//     "passwordComplexity": "strong"
//   });
// });

// studentRoute(app);

  
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});
