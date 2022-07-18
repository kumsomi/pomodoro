import { Link } from "react-router-dom";
import "./style.css"
const NavBar=()=>{
    
    return (
        
            <nav className="navigation-pomodoro">
                <Link className="h-2 no-link nav-logo " to="/" >Profocus</Link>
                <Link  className=" h-4 no-link nav-link" to="/tasks">Task</Link>
            </nav>
    );
}
export {NavBar};