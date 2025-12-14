export const Add = (inputValue, id) =>{
    return{
        type : "add",
        payload : {id: id, text: inputValue}
    }
}

export const Delet = (id) => {
    return {
        type: 'Delete',
        payload: id
    }
}


export const Update = (id, inputChange) => {
    return {
        type: 'Update',
        payload: id, inputChange
    }
}