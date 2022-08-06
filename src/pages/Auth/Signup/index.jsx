import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../../hooks/useToast";
import "../style.css";
const Signup=()=>{
    
    const initialFormData = {
        firstname:"",
        lastname:"",
		email: "",
		password: "",
	};
    const navigate=useNavigate();
    const {showToast}=useToast();
    const [formData, setFormData] = useState(initialFormData);

    const { firstname, lastname, email, password} = formData;
    const handleFormDataChange=(event)=>{
        const {name, value}=event.target;
        setFormData((prevData)=>({...prevData,[name]:value}));
    }

    const handleLoginWithTestCredentials=()=>{
        setFormData({
            firstname:"Somi",
            lastname:"Kaushik",
            email:"somikaushik@gmail.com",
            password:"Somi12@k"
        }
        )
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        localStorage.setItem('pomodoro-user',JSON.stringify(formData));
        showToast("User signed in successfully", "success");
        // console.log(formData);
        // console.log(formData.firstname);
        navigate("/login");
    }

    return(
        <div class="login">
            <h1>Signup</h1>
            <form className="form" 
            onSubmit={handleFormSubmit}
            >
                <div class="form-div">
                <label>First Name</label>
                <input 
                    type="text" 
                    name="firstname"
                    // id="input-login-email"
                    placeholder="Jane"
                    value={firstname}
                    // disabled={isLoggingIn}
                    onChange={handleFormDataChange}
                    required                
                    className="login-input primary-color"
                />
            </div>
            <div class="form-div">
                <label>Last Name</label>
                <input 
                    type="lastname" 
                    name="lastname"
                    // id="input-login-email"
                    placeholder="Doe"
                    value={lastname}
                    // disabled={isLoggingIn}
                    onChange={handleFormDataChange}
                    required                
                    className="login-input primary-color"
                />
            </div>
            <div class="form-div">
                <label>Email address</label>
                <input 
                    type="email" 
                    name="email"
                    // id="input-login-email"
                    placeholder="janedoe@gmail.com"
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

            <Link 
            to="/login"
            className="no-link"
            >
            <span className="login-link">Already have an account</span>
            </Link>
        </form>
        </div>
    )
}
export {Signup};