import { saveData, getData, updateData, removeData } from "./methods.js";

function saveMessage(content, author, messageID) {
    let data = {
        content: content,
        author: author,
        messageID: messageID
    };
    updateData(data, `/messages/${messageID}`);
};

function getMessage(messageID) {
    getData(`/messages/${messageID}`);
};

export { saveMessage, getMessage };