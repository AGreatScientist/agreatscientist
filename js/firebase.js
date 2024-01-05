const { initializeApp, cert } = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./creds.json");

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = { db }