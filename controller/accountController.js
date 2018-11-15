var db = require('../firebaseData/connection');


var accountController = {
    getStudent: (req,res,next) => {
        const spendingCollection  = db.collection("Spending");
        spendingCollection.get().then(snapshot=> {
            var docs = new Array();
            snapshot.forEach(doc=>{
              docs.push( doc.data());
            });
            res.json(docs);
        });
    },
    createStudent: (req,res,next)=> {
        res.send({
            "result": "ok",
            "account": "ok"
        });
    }
};

module.exports = accountController;