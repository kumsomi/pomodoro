import React,{ useContext, createContext, useReducer, useEffect } from "react";
import { taskReducer } from "../reducers/taskReducer";

const TaskContext=createContext(null);
const useTask=()=>useContext(TaskContext);

const TaskProvider=({children})=>{
    const [taskState, taskDispatch] = useReducer(taskReducer, {
        tasks: JSON.parse(localStorage.getItem("tasks")) ?? []
       });
    
      useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskState.tasks));
      }, [taskState]);
      
    return(
        <TaskContext.Provider value={{taskState, taskDispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export {useTask, TaskProvider};