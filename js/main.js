import {getAllList} from "./module/app.js";
import {writeTasks} from "./components/section.js";

let section__task = document.querySelector(".section__task");

let data = await getAllList();
let allTaks = await writeTasks(data);



section__task.innerHTML = allTaks;
