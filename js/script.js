// const { db } = require("./firebase.js");

const messageButton = document.getElementById("message-button");
const messageInput = document.getElementById("message-input");
const chatSession = document.getElementsByClassName("chat-session")[0];

let onlineMembersCount = 0;

messageButton.addEventListener("click", function (ev) {
    let input = messageInput;

    if (input.value === undefined || 
        input.value === null ||
        input.value == ""
    ) return;

    chatSession.innerHTML += `<br><p>${input.value}</p><br>`;
});

addEventListener("load", function (ev) {
    onlineMembersCount++;

    chatSession.innerHTML = `There are ${onlineMembersCount} people online!`;
});

addEventListener("unload", function (ev) {
    onlineMembersCount--;

    chatSession.innerHTML = `There are ${onlineMembersCount} people online!`;
})