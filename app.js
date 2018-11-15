var studentRoute = require('./studentRouteHelper');
var express = require('express'),
    app = express(),
    port = process.env.port || 3000;




// var spendingCollection = db.collection("Spending");

// //uset get() to get entire documents in a colletion
// spendingCollection.get().then((snapshot)=>{
//   snapshot.forEach(doc=>{
//     console.log(`id: ${doc.id} with data ${doc.data()}`);
//   })
// });

studentRoute(app);
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});