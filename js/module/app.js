export const getAllList = async() => {
    let url =`https://6674179975872d0e0a950e53.mockapi.io/todoList`;
    let options = {
        method : "GET",
    }
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}