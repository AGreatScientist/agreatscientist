const messageLoadButton = document.getElementById("message-load-button");
const messageSendButton = document.getElementById("message-send-button");
const messageInput = document.getElementById("message-input");
const chatSession = document.getElementsByClassName("chat-session")[0];

//const { db } = require("firebase.js");
//const { insertData } = require("methods.js")


let username = localStorage.getItem("username");
if (!username) {
    username = prompt("Ваше имя:\nВам придется вводить имя только один раз.\n(Не нажимайте кнопку 'Отмена', пожалуйста.)");
    while (username == "null" || !username.trim().length) username = prompt("Недопустимое значение. Введите корректное имя.");
    localStorage.setItem("username", username);
}

let onlineMembersCount = 0;
let messages = [];


messageSendButton.addEventListener("click", function (ev) {
    let input = messageInput;

    if (input.value === undefined || 
        input.value === null ||
        input.value == ""
    ) return;

    console.log(window.innerWidth, window.innerHeight);

    if (messages.length == 13) messages.shift();
    messages.unshift(`${username}: ${input.value}`);

    console.log(messages);
    chatSession.innerText += `\n\n\n${messages[messages.length - 1]}`;
});

addEventListener("load", function (ev) {
    onlineMembersCount++;

    chatSession.innerHTML = `There are ${onlineMembersCount} people online!`;
});

addEventListener("unload", function (ev) {
    onlineMembersCount--;

    chatSession.innerHTML = `There are ${onlineMembersCount} people online!`;
})
