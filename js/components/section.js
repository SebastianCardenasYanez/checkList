export const writeTasks = async(res) => {
    let date = new Date();
    let dateLeg = date.toLocaleString();
    let plantilla = /*html*/`
    <span class="date">${dateLeg}</span>
    `;
    res.forEach(elements => {
        if (elements.status === "On hold") {
            plantilla += /*html*/`
            <article class="tasks">
                <p>${elements.task}</p>
            <div class="icons">
                <img class="check" src="images/check-circle-svgrepo-com.svg" alt="">
                    <div class="circle__trash">
                        <img class="trash" src="images/trash-svgrepo-com.svg" alt="">
                    </div>
                </div>
            </article>
            `}else {
            plantilla += /*html*/`
            <article class="tasks__done">
                <p class="name__check" >${elements.task}</p>
            <div class="icons">
                <img class="check" src="images/check-circle-svgrepo-com.svg" alt="">
                    <div class="circle__trash">
                        <img class="trash" src="images/trash-svgrepo-com.svg" alt="">
                    </div>
                </div>
            </article>
            `}
    });
    return plantilla;
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
    return plantilla 
}