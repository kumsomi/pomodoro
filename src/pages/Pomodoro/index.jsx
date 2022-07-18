import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';
import {AiFillPlayCircle} from 'react-icons/ai';
import {AiFillPauseCircle} from 'react-icons/ai';
// import {IoRefreshCircle} from 'react-icons/io';
import {IoRefreshCircle} from 'react-icons/io5';
import React from 'react';
const Pomodoro=()=>{
    const percentage = 10;
    const totalPomodoroTime=100;
    const timeLeft='8:57';
    const taskTitle='Task-title';
    const taskDescription='This task is very important. I need to finish it as soon as possible.'
    return(
        <>
        <div className='pomodoro'>
            <div className='h-3 pomodoro-title'>{taskTitle}</div>
            <CircularProgressbar 
            className="circular-progress" 
            styles={{
                root:{},
                path:{
                    //path-color
                    stroke:'#e5ab4f',
                },
                trail:{
                    //circle behind the path
                    stroke:'#211E2F'
                },
                text:{
                    fill:'#e5ab4f'
                }

            } }
            value={percentage} 
            maxValue={totalPomodoroTime} 
            text={timeLeft} />
            <div className='pomo-icons'>
                
                <AiFillPlayCircle className='pomodoro-icons'/>
                <AiFillPauseCircle className='pomodoro-icons'/>
                <IoRefreshCircle className='pomodoro-icons'/>
            </div>
        </div>
        <div className="pomodoro-description para-4">
            {taskDescription}
        </div>
        </>
    )
}
export {Pomodoro};