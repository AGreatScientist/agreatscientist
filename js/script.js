import { insertData, selectData, updateData, deleteData } from "js/methods.js";


const button = document.getElementById("test");
const input = document.getElementById("message-input");

let counter = null;

button.addEventListener("click", insertData)

button.addEventListener("click", (ev)=>{
    button.innerText = `Clicks: ${counter}`;
})