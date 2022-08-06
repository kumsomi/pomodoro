import React from "react";
import { TaskList } from "./TaskList";
import {BsPlusLg} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";
import { TaskModal } from "../../components/TaskModal";
import { usePageTitle } from "../../hooks/useDocumentTitle";
import "./style.css";
import { useState } from "react";
import { useTask } from "../../context/task-context";

const Task=()=>{
    
    usePageTitle("Task | proFocus");
    const [showModal, setShowModal]= useState(false);
    const {taskState}=useTask();

    const toggleTaskModal=()=>{
        setShowModal((prev)=>!prev);
    }
    const user=JSON.parse(localStorage.getItem('pomodoro-user'));
    const userName= user.firstname;
    return (
        <div className="tasks">
            <h1 className="h-3">Welcome back, {userName}!</h1>
            <h3 className="h-4">You have {taskState.tasks.length}{taskState.tasks.length>1?` tasks`:` task`} for today</h3>
            
            <div className="task-container">
                <div className="head">
                    <h2 className="para-3 task-heading primary-color">To do List</h2>
                    <button className="btn floating-btn " onClick={toggleTaskModal}>
                        {showModal ? <ImCancelCircle/>: <BsPlusLg/>}
                    </button>
                </div>
                {showModal && <TaskModal toggleTaskModal={toggleTaskModal} />}
                {taskState.tasks.map((task) => (
                <TaskList key={task.id} task={task} toggleTaskModal={toggleTaskModal}/>))}
            </div>
        </div>
    )
}
export {Task};