import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTask } from "../../../context/task-context";
import { useToast } from "../../../hooks/useToast";
import "../style.css";
const Login=()=>{
    const initialFormData = {
        // firstname:"",
        // lastname:"",
		email: "",
		password: "",
	};
    const navigate=useNavigate();
    const {showToast}=useToast();

    const [formData, setFormData] = useState(initialFormData);

    const { email, password} = formData;
    const handleFormDataChange=(event)=>{
        const {name, value}=event.target;
        setFormData((prevData)=>({...prevData,[name]:value}));
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();

        const user=JSON.parse(localStorage.getItem('pomodoro-user'));
        const userEmail= user.email;
        const userPassword=user.password
        console.log(user.email, user.password);
        if(userEmail===email){
            console.log("same");
            if(userPassword===password){
                showToast("User logged in successfully", "success");
                navigate("/tasks");
            }
            else{
                showToast("Password is not correct. Please try again.", "error");
            }
        }
        else{
            showToast("User not found. Please signup first", "error");
        }
    }
    const handleLoginWithTestCredentials=()=>{
        setFormData({
            email:"somikaushik@gmail.com",
            password:"Somi12@k"
        })
    }
    return(
        <div class="login">
            <h1>Login</h1>
            <form className="form"
            onSubmit={handleFormSubmit}
            >
            <div class="form-div">
                <label>Email address</label>
                <input 
                    type="email" 
                    name="email"
                    id="input-login-email"
                    placeholder="jane@gmail.com"
                    value={email}
                    // disabled={isLoggingIn}
                    onChange={handleFormDataChange}
                    required                
                    className="login-input primary-color"
                />
            </div>
            <div class="form-div">
                <label>Password</label>
                <input 
                    type="password" 
                    id="input-login-psd"
                    // disabled={isLoggingIn}
                    placeholder="********"
                    name="password"
                    value={password}
                    onChange={handleFormDataChange}
                    required            
                    className="login-input primary-color"/>
            </div>
            {/* <div class="form-div">
                <label>
                    <input 
                        type="checkbox" 
                        id="checkbox-remember"
                        // checked={rememberMe}
                        // disabled={isLoggingIn}
                        name="rememberMe"
                        // onChange={handleFormDataChange}
                    /> Remember me
                </label>
            <div class="psw" >Forgot password?</div>
            </div> */}
            
            <input 
                type="submit"
                // disabled={isLoggingIn}
				value="Login"
                className="btn primary-btn login-btn"
            />
            <input 
                type="submit"
                value="Login with Test Credentials"
                // disabled={isLoggingIn}
                onClick={handleLoginWithTestCredentials} 
                className="btn secondary-btn login-btn"
            />

            <Link to="/signup" className="no-link ">
                <span className="login-link">Create new account</span>
            </Link>
        </form>
        </div>
    )
}
export {Login};