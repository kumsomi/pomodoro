import { Navigate } from "react-router-dom"

const AuthRequire=()=>{
    // let location=useLocation();
    return <Navigate to="/tasks" replace/>
}
export {AuthRequire};