// import Handle from "rc-slider/lib/Handles/Handle";
import React from "react";
import { useState } from "react";

import {BiEditAlt} from "react-icons/bi";
import {MdDeleteOutline} from "react-icons/md";
import { Link } from "react-router-dom";
import { TaskModal } from "../../../components/TaskModal";
import { useTask } from "../../../context/task-context";
import { useToast } from "../../../hooks/useToast";
// import { useState } from "react";
// import { TaskModal } from "../TaskModal";
import "./style.css";
const TaskList=({task})=>{

    // const taskTitle='Task 1';
    
    const [isEdit, setIsEdit] = useState(false);
    
    const {taskDispatch} = useTask();
    const {id, title, description, focusDuration, breakDuration}=task;

    const handleTaskEdit = () => {
        setIsEdit((edit) => !edit);
    };
    const {showToast}=useToast();
    return(
    <div key={task.id}>  
    <div className="tasklist">
        <Link className="para-4 no-link task-name" to="/pomodoro" state={{pomodoroTask:task}}>{`${title} : ${description}`}</Link>
        <div>
            <span class="icon-btn para-4" onClick={()=>handleTaskEdit(task.id)}><BiEditAlt/></span>
            <span class="icon-btn para-4" onClick={()=>{
                taskDispatch({type:"DELETE_TASK", payload:{id:task.id}})
                showToast("task deleted successfully");}
                }
                ><MdDeleteOutline/></span>
        </div>
    </div>
    {isEdit && (<TaskModal id={id} title={title} description={description} focusDuration={focusDuration} breakDuration={breakDuration} isEdit={isEdit} setIsEdit={setIsEdit} />)} 
    </div>
    );
}
export {TaskList};