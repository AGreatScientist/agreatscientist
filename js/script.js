const button = document.getElementById("message-button");
const input = document.getElementById("message-input");

const sidebar = document.querySelector(".chat-sidebar");

let onlineMembersCount = 0;

addEventListener("load", function(ev) {
    onlineMembersCount++;

    sidebar.innerText = `Онлайн: ${onlineMembersCount}/20`;
});

addEventListener("unload", function(ev) {
    onlineMembersCount--;

    sidebar.innerText = `Онлайн: ${onlineMembersCount}/20`;
});