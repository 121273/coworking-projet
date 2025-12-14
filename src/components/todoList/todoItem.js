import { useState } from "react";


function TodoItem({task, toggleTask, deleteTask}){
    
    const [toggle, setToggle] = useState(false)
    const checked = (e) =>{
        setToggle(e.target.checked)
    }
    
    const [toggleText, setToggleText] = useState('form-check-label ps-2 flex-grow-1')

    if(toggle){
        setToggleText('text-decoration-line-through form-check-label ps-2 flex-grow-1') 
    }else{
        setToggleText('form-check-label ps-2 flex-grow-1')
        
    }
    






    return(
        task.map(
            task =>
                
            <div className="  d-flex align-items-center border p-3 rounded border-dark border-3 m-4">
            <input  type="checkbox"   onChange={checked}   className="form-check-input"></input>
            <label className={toggleText}>{task.title}</label>
            <button className="btn btn-outline-danger   fs-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
        </div>
        )
    )
}

export default TodoItem;