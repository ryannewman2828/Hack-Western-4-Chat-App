var admin = require("firebase-admin");
var path = require('path');

const MessageService = require('../Services/MessageService');

const FireBaseUtil = {};

// Fetch the service account key JSON file contents
var serviceAccount = require(path.resolve("./server/api/Util/hackwestern4-37368-firebase-adminsdk-jfpkp-0fa452cc67.json"));

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackwestern4-37368.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("conversations/23423rsfsf34");

ref.on("value", function(snapshot) {
    MessageService.analyze(snapshot.val());
});

module.exports = FireBaseUtil;
