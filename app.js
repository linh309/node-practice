
const http = require('http');
const requestHelper = require('./requestHelper');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request,response)=>{  
  response.statusCode = 200;

  const url = request.url;  
  const requestPath = requestHelper.transformRequestToFilePath(url);

  fs.readFile(requestPath,function (error, data) {
    if (data!==undefined){
      var pageContent = data.toString();        
      var contentType = requestHelper.getContentTypeFromUrl(url);
      response.setHeader('Content-Type', contentType);
      response.end(pageContent);
    }    
  });
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});