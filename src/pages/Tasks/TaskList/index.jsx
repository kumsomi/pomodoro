import React from "react";

import {BiEditAlt} from "react-icons/bi";
import {MdDeleteOutline} from "react-icons/md";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { TaskModal } from "../TaskModal";
import "./style.css";
const TaskList=()=>{

    // const [showModal, setShowModal]=useState(false);

    // const handleTaskModal=()=>{
    //     setShowModal((modal)=>!modal);
    // }
    const taskTitle='Task 1';
    return(
    <div className="tasklist">
        <Link className="para-4 no-link task-name" to="/pomodoro">{taskTitle}</Link>
        <div>
            <span class="icon-btn para-4"><BiEditAlt/></span>
            <span class="icon-btn para-4"><MdDeleteOutline/></span>
        </div>
    </div>
    );
}
export {TaskList};