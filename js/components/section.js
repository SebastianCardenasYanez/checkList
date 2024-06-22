export const writeTasks = async(res) => {
    let date = new Date();
    let dateLeg = date.toLocaleString();
    let plantilla = /*html*/`
    <span class="date">${dateLeg}</span>
    `;
    let section__task = document.querySelector(".section__task");
    section__task.innerHTML = plantilla
    res.forEach(elements => {
        if (elements.status === "On hold") {
            let squech = /*html*/`
            <article class="tasks">
            <p class="name" >${elements.task}</p>
            <div class="icons">
            <img class="check" src="images/check-circle-svgrepo-com.svg" alt="">
            <div class="circle__trash">
            <img class="trash" src="images/trash-svgrepo-com.svg" alt="">
            </div>
            </div>
            </article>
            `;
            section__task.innerHTML += squech

        }else {
            let section__task = document.querySelector(".section__task");
            let squech = /*html*/`
            <article class="tasks__done">
            <p class="name__check" >${elements.task}</p>
            <div class="icons">
            <img class="check" src="images/check-circle-svgrepo-com.svg" alt="">
            <div class="circle__trash">
            <img class="trash" src="images/trash-svgrepo-com.svg" alt="">
            </div>
            </div>
            </article>
            `;
            section__task.innerHTML += squech
    
        }
    });
}

export const addTask = (input) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="tasks">
        <p>${input}</p>
        <div class="icons">
            <img class="check" src="images/check-circle-svgrepo-com.svg" alt="">
            <div class="circle__trash">
                <img class="trash" src="images/trash-svgrepo-com.svg" alt="">
            </div>
        </div>
    </article>
    `;
    return plantilla;
}
