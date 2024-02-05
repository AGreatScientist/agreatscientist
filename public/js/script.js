const messageLoadButton = document.getElementById("message-load-button");
const messageSendButton = document.getElementById("message-send-button");
const messageInput = document.getElementById("message-input");
const chatSession = document.getElementsByClassName("chat-session")[0];

import { saveMessage, getMessage } from "./firebase.js";
import { getData, updateData } from "./methods.js";

var username = localStorage.getItem("username")
if (!username) username = prompt("Введите своё имя.\nЭто сообщение больше не появится.")
while (!username || !username.trim().length || username === "null" || username === "undefined") {
    username = prompt("Введено некорректное значение.\nВведите своё имя.");
}
localStorage.setItem("username", username.trim());

var messages = [];
let k = 1;

messageSendButton.addEventListener("click", function (ev) {
    let input = messageInput;

    if (input.value === undefined || 
        input.value === null ||
        input.value == ""
    ) return;

    console.log(window.innerWidth, window.innerHeight);

    if (messages.length == 13) messages.shift();
    messages.unshift(`${username}: ${input.value}`);

    chatSession.innerText += `\n\n\n${messages[messages.length - 1]}`;
    getMessage(k);
    // saveMessage(input.value, username, 1);
});

window.addEventListener("load", function (ev) {
    let onlineMembersCount = getData("onlineMembersCount");
    updateData(onlineMembersCount + 1, "/onlineMembersCount");
    chatSession.innerHTML = `<p>There are ${onlineMembersCount + 1} people online!</p>`;
});

window.addEventListener("beforeunload", function (ev) {
    let onlineMembersCount = getData("onlineMembersCount");
    updateData(onlineMembersCount - 1, "onlineMembersCount");
    chatSession.innerHTML = `<p>There are ${onlineMembersCount - 1} people online!</p>`;
});
