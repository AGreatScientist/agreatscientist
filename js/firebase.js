const { db, save, get, update, remove } = require("./methods");

function saveMessage(content, author, messageID) {
    let data = {
        content: content,
        author: author,
        messageID: messageID
    };
    update(data);
};

module.exports = { saveMessage };
