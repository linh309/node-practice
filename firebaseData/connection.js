//Require firebase module and setup credential
var serviceAccount = require('../key.json')
var firebaseAdmin = require('firebase-admin');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
});
//END

//Firebase setting to be compatiable with new CouldStore
var db = firebaseAdmin.firestore();
db.settings({timestampsInSnapshots: true});
//END

module.exports = db;