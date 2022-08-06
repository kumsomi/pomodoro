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
                    
                    </div>
                <div className="h-3"> 
                    <Link to="/login" className="no-link link-btn">Login</Link> to Check your tasks.
                </div>
                {/* <Link to="/login">Login</Link> */}
            </div>
        </div>
    )
}
export {Home};