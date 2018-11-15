//https://medium.com/@daspinola/video-stream-with-node-js-and-html5-320b3191a6b6
const db = require('../firebaseData/connection');
const collection = db.collection("Spending");
const fs = require('fs');

var spendingController = {
    streamFile: (req,res) => {
        const path='D:/SourceCode/node-practice/asset/song.mp3';
        const stat = fs.statSync(path);
        const fileSize = stat.size;
        const range = req.headers.range;
        // const start = parseInt(parts[0], 10)
        // const end = parts[1] 

        let start = 0;
        let end = 0;

        if (range){
            const parts1 = range.replace(/bytes=/, "").split("-")
            start = parseInt(parts1[0], 10);
            end = parts1[1] ;
        }

        if (start>0){

            const parts = range.replace(/bytes=/, "").split("-")
            // start = parseInt(parts[0], 10)
            // end = parts[1] 
            //   ? parseInt(parts[1], 10)
            //   : fileSize-1
            start = 1;
            end = 98341;
            const chunksize = (end-start)+1
            const file = fs.createReadStream(path, {start, end})
            const head = {
              'Content-Range': `bytes ${start}-${end}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': chunksize,
              'Content-Type': 'audio/mpeg',
            }

            res.writeHead(206, head);
            file.pipe(res);                
        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'audio/mpeg'
            };
            res.writeHead(200, head);
            fs.createReadStream(path)
                .pipe(res); //piping the output of a readable stream - the source of data, as the input of a writeable stream
                            //in this case writeable stream is res object (Response Object)
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