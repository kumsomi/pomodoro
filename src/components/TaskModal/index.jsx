import "./style.css";
import {BsFillCheckCircleFill} from "react-icons/bs"
import {GiCancel} from "react-icons/gi";
import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import { useTask } from '../../context/task-context';

const TaskModal=({id, title="", description="", focusDuration="20", breakDuration="5", isEdit, setIsEdit, toggleTaskModal})=>{
    
    const [info, setInfo] = useState({
        id,
        title,
        description,
        focusDuration,
        breakDuration,
    });

    //counting titleCount and descriptionCount
    const [count, setCount] = useState({
        titleCount: info.title.length,
        descriptionCount: info.description.length,
    });
    const {taskState, taskDispatch} = useTask();

    //handlers to update the title and description
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setInfo((prevInfo)=>({...prevInfo, [name]:value}));
        setCount((prev) => ({ ...prev, [`${name}Count`]: value.length }));
    }

    //update task with reducer
    const handleSubmit=(e)=>{
        console.log("btn");

        e.preventDefault();
        if(isEdit){
            //update the task
            let updatedTasks = taskState.tasks.map((item)=>{
                if(item.id===info.id){
                    return {...info};
                }
                return item;
            });
            taskDispatch({type:"UPDATE_TASK", payload:updatedTasks});
            setIsEdit(false);
        }
        else{
            //add the task
            console.log("add");
            taskDispatch({type:"ADD_TASK", payload:{...info, id:uuidv4}});
            toggleTaskModal();
        }
    }

    return(
        <div>
        <form className="task-form para-4" noValidate> 
            <div className="heading-task">
                <h3 className="primary-color">{isEdit?"Update":"Add"} Task</h3>
            </div>
            <input className="title" type="text" name="title" id="input" 
                value={info.title || ""} 
                onChange={(e)=>handleChange(e)}
                placeholder="Add Title" required
            />
                       
            <p className='title-count'> {count.titleCount<3 ? ( <><GiCancel/>{` ${count.titleCount}/3`}</>):<BsFillCheckCircleFill/>}</p>
            
            <textarea className="task-description" name='description' 
                value={info.description || ""} 
                onChange={(e)=>handleChange(e)} 
                placeholder="Task description"
            />
            <p className='description-count'> {count.descriptionCount<5 ? ( <><GiCancel/>{` ${count.descriptionCount}/5`}</>):<BsFillCheckCircleFill/>}</p>

            
            <div className="focus-time">
                Focus-time:<span> 
                    {info.focusDuration} mins</span>
                <div>
                    <input className='slider' type="range" name="focusDuration" id="" min="20" max="120" step="5" value={info.focusDuration} onChange={(e)=>handleChange(e)}/>
                </div>
            </div>
            <div className="break-time">
                Break-time: <span>
                    {info.breakDuration} mins</span>
                <div>
                    <input className='slider' type="range" name="breakDuration" id="" min="0" max="90" step="5" value={info.breakDuration} onChange={(e)=>handleChange(e)}/>
                </div>
            </div>
            <button className="btn-add btn primary-btn" onClick={(e)=>handleSubmit(e)} 
                disabled={
                    !info.title || 
                    !info.description ||
                    count.titleCount<3||
                    count.descriptionCount<5
                }
            >
                {isEdit?"Update":"Add"}
            </button> 
        </form>
        </div>
    );
}
export {TaskModal}