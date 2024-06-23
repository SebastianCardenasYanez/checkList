export const getAllList = async() => {
    let url =`https://66774418145714a1bd7445c8.mockapi.io/Checklist`;
    let options = {
        method : "GET",
    }
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}

export const getList = async(id) => {
    let url = `https://66774418145714a1bd7445c8.mockapi.io/Checklist/${id}`;
    let options = {
        method : "GET",
    }
    let res = await fetch(url, options);
    let data = res.json();
    return data;   
}