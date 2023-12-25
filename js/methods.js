import { getDatabase, initializeApp, ref, set, child, update, remove }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAwvEpYeExfGUmQgYKFVNGFcZJmzAeQaYk",
    authDomain: "likecompot-chat.firebaseapp.com",
    databaseURL: "https://likecompot-chat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "likecompot-chat",
    storageBucket: "likecompot-chat.appspot.com",
    messagingSenderId: "873209489255",
    appId: "1:873209489255:web:956219eb1d2f18e15371c2",
    measurementId: "G-7ERZ3KJE4E"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

console.log(app);

function insertData(obj) {
    set(ref(db, `Clicks/${obj}`), {
        obj: obj++
    })
    .then(() => {
        alert("data stored successfully");
    })
    .catch((error) => {
        alert("error: " + error)
    });
}

function selectData(obj) {
    const dbref = ref(db);

    get(child(dbref, `Clicks/${obj}`)).then((snapshot) => {
        if (snapshot.exist()) {
            return snapshot;
        } else {
            alert("try again");
        }
    })
    .catch((error) => {
        alert("error: " + error);
    });
}

function updateData(obj) {
    update(ref(db, `Clicks/${obj}`), {
        obj: obj++
    })
    .then(() => {
        alert("data stored successfully");
    })
    .catch((error) => {
        alert("error: " + error)
    });
}

function deleteData(obj) {
    remove(ref(db, `Clicks/${obj}`))
    .then(() => {
        alert("data removed successfully");
    })
    .catch((error) => {
        alert("error: " + error)
    });
}