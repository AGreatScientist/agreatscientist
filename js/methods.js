var admin = require("firebase-admin");

const firebaseConfig = {
    apiKey: "AIzaSyCy4KzPMDsrPodjcDJ6MWURBVFSQk5dRvs",
    authDomain: "likecompot-chatt.firebaseapp.com",
    databaseURL: "https://likecompot-chatt-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "likecompot-chatt",
    storageBucket: "likecompot-chatt.appspot.com",
    messagingSenderId: "587237363934",
    appId: "1:587237363934:web:4094a12aa1632c226ef24f",
    measurementId: "G-JP4PRR7KNM"
};

admin.initializeApp(firebaseConfig);

const db = admin.database();

function save(path) {
    db.ref(path).set({
        content: data.content,
        author: data.author,
        messageID: data.messageID
    });
};

function get(path) {
    const userRef = ref(path);
    userRef.on("value", function (snapshot) {
        let val = snapshot.val()
        return val;
    })
};

function update(data, path) {
    let updates = {
        content: data.content,
        author: data.author,
        messageID: data.messageID,
    };
    let result = db.ref(path).update(updates)
    return result;
};

function remove(path) {
    db.ref(path).remove()
};

module.exports = { db, save, get, update, remove };