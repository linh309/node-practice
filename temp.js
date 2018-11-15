
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
// var studentRoute = require('./studentRouteHelper');
// var express = require('express'),
//     app = express(),
//     port = process.env.port || 3000;

// var serviceAccount = require("./key.json");    
// var firebaseAdmin = require('firebase-admin');



































//   // var firebase = require('firebase');
//   var admin = require("firebase-admin");

//   var serviceAccount = require("./key.json");
  
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://nodepractice-4071a.firebaseio.com"
//   });

//   //get a reference to the database service
// var database = admin.database();
// var usersRef = database.ref("/users")
// usersRef.once("value").then((snapshot)=>{
//   snapshot.forEach((child)=>{
//     var data = child.val();
//     console.log(data);
//   })
// });

// var userId = database.ref("/users").once('value').then(function(snapshot){
//   var val = snapshot.val();
//   console.log(snapshot);
//   console.log(val);
// });


  // Initialize Firebase
// TODO: Replace with your project's customized code snippet
// var config = {
//   apiKey: "AIzaSyBk3Gue8pLQBKBPd02HhWs312eFqR0abrs",
//   authDomain: "nodepractice-4071a.firebaseapp.com",
//   databaseURL: "https://nodepractice-4071a.firebaseio.com",
//   projectId: "nodepractice-4071a",
//   storageBucket: "nodepractice-4071a.appspot.com",
//   messagingSenderId: "405555928468"
// };
// firebase.initializeApp(config);
// firebase.database.enableLogging(true);

// //get a reference to the database service
// var database = firebase.database();
// //var auth = firebase.auth();
// var userId = database.ref("/users/8i3oJx5P2Hs9YHhS5H16").once('value').then(function(snapshot){
//   var val = snapshot.val();
//   console.log(val);
// });
// var users = database.ref("users");
// users.on("value", snap => {
//   console.log(snap);
//   console.log(snap.key); // this key will output users
//   console.log(snap.val()); // this method will return full user data object
// });

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

  
// app.listen(port, ()=>{
//   console.log(`Server running on port ${port}`);
// });
