export const writeTasks = async(res) => {
    let date = new Date();
    let dateLeg = date.toLocaleString();
    let plantilla = /*html*/`
    <span class="date">${dateLeg}</span>
    `;
    res.forEach(elements => {
        if (elements.status === "On hold") {
            let section__task = document.querySelector(".section__task");
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
            `;
            section__task.innerHTML = plantilla
            
            let check = document.querySelectorAll(".check");
            check.forEach(element => {
                element.addEventListener("click", (e) => {
                    console.log("se realizo click",e);
                });
            })
            
            
            let trash = document.querySelectorAll(".trash");
            trash.forEach(element => {
                element.addEventListener("click", (e) => {
                    console.log("se realizo click",e);
                })

            })
        }else {
            let section__task = document.querySelector(".section__task");
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
            `;
            section__task.innerHTML = plantilla
            
            let checks = document.querySelectorAll(".check");
            let trashs = document.querySelectorAll(".trash");

            if (checks && trashs) {    
            checks.forEach(element => {
                element.addEventListener("click", (e) => {
                    console.log("se realizo click",e);
                });
            });
            
            trashs.forEach(element => {
                element.addEventListener("click", (e) => {
                    console.log("se realizo click",e);
                });

            });
            }else{
                let check = document.querySelector(".check");
                check.addEventListener("click", (e) => {
                    console.log("se realizo click",e);
                });
                
                let trash = document.querySelector(".trash");
                trash.addEventListener("click", (e) => {
                console.log("se realizo click",e);
                });
            };
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
