export const writeTasks = async(res) => {
    let plantilla = "";
    res.forEach(elements => {
        plantilla += /*html*/`
        <article class="tasks">
            <p>${elements.task}</p>
        <div class="icons">
            <img id="check" src="images/check-circle-svgrepo-com.svg" alt="">
                <div class="circle__trash">
                    <img id="trash" src="images/trash-svgrepo-com.svg" alt="">
                </div>
            </div>
        </article>
        `});
    return plantilla;
}