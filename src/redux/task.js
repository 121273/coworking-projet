import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Add, Delet, Update } from "./actionTask";

const Task = () => {
    const [inputValue, setInputValue] = useState("")
    const [editChose, setEditChose] = useState(null)
    const [inputChange, setInputChange] = useState("")
    const tasks = useSelector((state) => state.tasks)

    const Dispatch = useDispatch()

    const handleUpdate = (id) => {
        if(!inputChange) return;
        Dispatch(Update({id, text: inputChange}));
        setEditChose(null);
        setInputChange("");
    
    };

    return (
        <div className="container m-5">
            <h1>Task manager</h1>
            <div className="d-flex">
                <input type="text" className="form-control" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="entrer une nouvelle tache...." ></input>
                <input type="submit" className="mx-1 w-25 form-control btn btn-outline-secondary" value="Add" onClick={() => {Dispatch(Add(inputValue, tasks.length + 1))}}></input>

            </div>
            <div>
                <ul className="list-group list-group-flush my-3" >
                    {tasks && tasks.map(task => (
                        <li className="list-group-item" key={task.id} style={{display:'flex', justifyContent:'space-between'}}>
                            {{editChose === task.id ? (

                            )}}

                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )


}