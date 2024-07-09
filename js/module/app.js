export const getAllList = async() => {
    let url =`https://6674179975872d0e0a950e53.mockapi.io/todoList`;
    let options = {
        method : "GET",
    }
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}

export const getList = async(id) => {
    let url = `https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`;
    let options = {
        method : "GET",
    }
    let res = await fetch(url, options);
    let data = res.json();
    return data;   
}

export const postTask = (postATask) => {
    let url =`https://6674179975872d0e0a950e53.mockapi.io/todoList`;
    let options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(postATask)
    }
    return fetch(url, options)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return res;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

export const deleteTask = (id) => {
    let url = `https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`;
    let options = {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json",
        },
    }
    return fetch(url, options)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return res;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

export const putTask = (id, task) => {
    let url =`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`;
    let options = {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(task)
    }
    console.log(options);
    return fetch(url, options)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return res;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
};