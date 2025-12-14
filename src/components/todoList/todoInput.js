


function TodoList ({newTask, setNewTask, addTask}){

    


    return(
        <div className=" d-flex gap-3 m-4">
            <input className="form-control col-6" placeholder="Nouvelle tâche...."></input>
            <button className="btn btn-outline-primary col-3">Add</button>
        </div>
    );

}

export default TodoList;