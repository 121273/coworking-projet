import { legacy_createStore } from "redux";

const Data = {
    tasks : [

    ]
}

const TaskReducer = (state = Data, action) =>{
    switch (action.type) {
        case "add": return {...state, tasks : [state.tasks, action.payload]};
        case "Delete" : return {...state, tasks : state.tasks.filter(task => task.id !== action.payload)}
        case "Update" : return{...state, tasks : state.tasks.map(task => task.id === action.payload.id?{...task, text:action.payload.text} : task)}
        
    
        default:
            return state ;
    }
}

const store = legacy_createStore(TaskReducer)
export default store;