import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, child, ref, get, set, update, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";


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

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase();

function saveData(data, path) {
    set(ref(db, path), {
        content: data.content,
        author: data.author,
        messageID: data.messageID
    });

    alert('Saved');
};

function getData(path) {
    get(child(ref(db), path)).then((snapshot) => {
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
        console.error(error);
    });
};

function updateData(data, path) {
    const updates = {}
    updates[path] = data;
    return update(ref(db), updates)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err);
    });
};

function removeData(path) {
    db.ref(path).remove();

    alert('deleted');
};

export { saveData, getData, updateData, removeData };
