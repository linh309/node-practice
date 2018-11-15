const db = require('../firebaseData/connection');
const collection = db.collection("Spending");
const fs = require('fs');

var spendingController = {
    streamFile: (req,res) => {
        const path='D:/SourceCode/node-practice/asset/song.mp3';
        const stat = fs.statSync(path);
        const fileSize = stat.size;
        const range = req.header.range;
        if (range){

        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'audio/mpeg'
            };
            res.writeHead(200, head);
            fs.createReadStream(path)
                .pipe(res);
        }        
    },

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