const db = require('../firebaseData/connection');
const collection = db.collection("Spending");

var spendingController = {
    getAllSpending: (req,res,next) => {                
        collection.get().then((snapshot)=>{
            var docs = new Array();
            snapshot.forEach(doc=>{
              docs.push({
                  id: doc.id,
                  data: doc.data()
              });
            });
            res.json(docs);
        });
    },
    create: (req,res,next) => {
        var spendingData = req.body;
        collection.add(spendingData)
            .then(ref=>{
                res.json({id: ref.id});
            })
    }
};

module.exports = spendingController;