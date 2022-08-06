import { useContext } from "react";
import { createContext } from "react";

const initialFormData = {
    firstname:"",
    lastname:"",
    email: "",
    password: "",
};
const AuthContext=createContext(initialFormData);

const AuthProvider=({children})=>{
    // const {userEmail, userPassword, isAuth};
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext);