import {getAllList} from "./module/app.js";
import {writeTasks, addTask} from "./components/section.js";

let section__task = document.querySelector(".section__task");
let input__search = document.querySelector("#input__search");

let data = await getAllList();
let allTaks = await writeTasks(data);

section__task.innerHTML = allTaks;

input__search.addEventListener("change", (e) => {
    let text = e.target.value;
    input__search.value = null;
    let search = addTask(text);
    section__task.innerHTML += search;
    console.log(search);
})
