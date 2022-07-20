import React from "react";
import { Link } from "react-router-dom";
import './style.css'; 
import { usePageTitle } from "../../hooks/useDocumentTitle";
const Home=()=>{
    usePageTitle("Home | proFocus");
    return (
        <div class="home-container">
            {/* <div></div> */}
            <img className="banner-img" src="./asset/clock.svg" alt="" />
            <div className="home-text">
                <div className="h-2">Struggling with time management?</div>
                <div className="para-4">Try <span>pomodoro</span> technique to focus on your important task and finish them early in your day.
                </div>
                <div className="para-4">
                    <span > proFocus</span> will help you create productive days.
                    {/* focus more by customizing your 24hrs routine.  */}
                    {/* according to your need. */}
                    </div>
                <div className="h-3">Checkout your tasks.
                    <Link to="/tasks" className="no-link link-btn">My Task</Link>
                </div>
            </div>
        </div>
    )
}
export {Home};