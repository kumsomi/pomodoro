import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./style.css";
import { useState } from 'react';
const TaskModal=()=>{
    const [focusTime, setFocusTime]=useState(0);
    const [breakTime, setBreakTime]=useState(0);
    
    const focusTimeHandler=(time)=>{
        setFocusTime(time);
    }
    const breakTimeHandler=(time)=>{
        setBreakTime(time);
    }

    return(
        <div>
        <form className="task-form para-4"> 
            <div className="heading-task">
            <h1 className="primary-color">Add Task</h1>
            </div>
            <input className="title" type="text" name="" id="" placeholder="Add Title"/>
            <textarea className="task-description" placeholder="Task description"/>
            <div className="focus-time">
                Focus-time:<span> {focusTime} mins</span>
                <Slider 
                    className='slider'
                    min={20}
                    max={120}
                    vertical={false}
                    onChange={focusTimeHandler}
                    step={5}
                />
            </div>
            <div className="break-time">
                Break-time: <span>{breakTime} mins</span>
                <Slider className='slider'
                    min={0}
                    max={90}
                    vertical={false}
                    onChange={breakTimeHandler}
                    step={5}
                />
            </div>
            {/* <input  type="text" name="" id="" placeholder="break time"/> */}
            <button className="btn-cancel btn primary-btn">Cancel</button>
            <button className="btn-add btn primary-btn">Add</button>
        </form>
        </div>
    );
}
export {TaskModal}