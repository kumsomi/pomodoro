import React, { useEffect, useRef, useState}  from 'react';
import { useLocation, useNavigate, Link} from "react-router-dom";
import { usePageTitle } from '../../hooks/useDocumentTitle';

import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';

import {BsFillPlayFill} from 'react-icons/bs';
import {BsPauseFill} from 'react-icons/bs';
import {MdRefresh} from 'react-icons/md';

const Pomodoro=()=>{
    
    // usePageTitle("Pomodoro | proFocus");

    const location=useLocation();
    const navigate = useNavigate();
    const { pomodoroTask } = location.state;
    const { title, description, focusDuration, breakDuration } = pomodoroTask;

    const [pomodoroMode, setpomodoroMode] = useState("focus");
    const [seconds, setSeconds] = useState(0);
    const [isPause, setIsPause]=useState("false");


    const percentageRef = useRef(100);
    const secondsRef = useRef(seconds);
    const pomodoroModeRef = useRef(pomodoroMode);
    const intervalRef = useRef(null);

    const focusMinutes = Number(focusDuration);
    const breakMinutes = Number(breakDuration);

    const totalSeconds =
    (pomodoroMode === "focus" ? focusMinutes : breakMinutes) * 60;
    percentageRef.current = (seconds / totalSeconds) * 100;
    let minutesLeft = Math.floor(seconds / 60);
    let secondsLeft = seconds % 60;
    if (minutesLeft < 10) minutesLeft = `0${minutesLeft}`;
    if (secondsLeft < 10) secondsLeft = `0${secondsLeft}`;

  // handle update seconds within setInterval
  const handleSecondsUpdate = () => {
    secondsRef.current--;
    setSeconds(secondsRef.current);
  };

  // switch modes withing setInterval
  const switchPomodoroMode = () => {
    const newMode = pomodoroModeRef.current === "focus" ? "break" : "focus";
    const newSeconds = (newMode === "focus" ? focusMinutes : breakMinutes) * 60;

    setpomodoroMode(newMode);
    pomodoroModeRef.current = newMode;

    setSeconds(newSeconds);
    secondsRef.current = newSeconds;
  };

  // handle pause/restart count
  const handleStopInterval = () => {
    setIsPause((prev)=>!prev);
    clearInterval(intervalRef.current);
  };
  // handle start count
  const handleStartInterval = () => {
    setIsPause((prev)=>!prev);

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (secondsRef.current === 0) return switchPomodoroMode();
      handleSecondsUpdate();
    }, 1000);
  };

  // initialize setInterval on render
  useEffect(() => {
    setSeconds(focusMinutes * 60);
    secondsRef.current = focusMinutes * 60;
  }, []);

  //update title
  usePageTitle(
    pomodoroMode === "focus"
      ? `${minutesLeft} : ${secondsLeft} | Focus | Pomodoro`
      : `${minutesLeft} : ${secondsLeft} | Break | Pomodoro`
    );

    return(
        <>
        <div className='pomodoro'>
          <Link to="/tasks" className="no-link link-btn">Return to tasks</Link>
            <div className='h-3 pomodoro-title'>{title}</div>
            <CircularProgressbar 
            className="circular-progress" 
            value={percentageRef.current}
            counterClockwise={true}
            styles={{
                root:{},
                path:{
                    //path-color
                    stroke: pomodoroModeRef.current==="focus"?'#e5ab4f':'#56db84'
                },
                trail:{
                    //circle behind the path
                    stroke:'#3F3D56'
                },
                text:{
                    fill: pomodoroModeRef.current==="focus"?'#e5ab4f':'#56db84'
                }

            } }
            text={`${minutesLeft}:${secondsLeft}`} />
            <div className='pomo-icons'>
                {isPause?(
                    <button class="btn outline-btn icon-text-btn" onClick={()=>handleStartInterval()}> 
                        <BsFillPlayFill /> Start
                    </button>
                ):(
                    <button class="btn outline-btn icon-text-btn" onClick={()=>handleStopInterval()}> 
                        <BsPauseFill/> Pause
                    </button> 
                )}  
                <button class="btn outline-btn icon-text-btn" onClick={() => {
                    secondsRef.current = focusMinutes * 60;
                    setSeconds(focusMinutes * 60);
                    pomodoroModeRef.current = "focus";
                    }}
                > 
                    <MdRefresh/> Restart
                </button>   
            </div>
        </div>
        <div className="pomodoro-description para-4">
            {description}
        </div>
        </>
    )
}
export {Pomodoro};