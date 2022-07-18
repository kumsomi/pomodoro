import React from "react";
import { TaskList } from "./TaskList";
import {BsPlusLg} from "react-icons/bs";
import { TaskModal } from "./TaskModal";
import "./style.css";
const Task=()=>{
    return (
        <div className="tasks">
            <h1 className="h-3">Welcome back, User!</h1>
            <h3 className="h-4">You have 4 tasks for today</h3>
            <div className="head">
                <h2 className="para-4 task-heading">To do List</h2>
                <button className="btn floating-btn ">
                    <BsPlusLg/>
                </button>
            </div>
            {/* {showModal} */}
            <TaskModal/>
            <TaskList/>
        </div>
    )
}
export {Task};