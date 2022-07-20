import React from "react";
import { usePageTitle } from "../../hooks/useDocumentTitle";

const InvalidRoute=()=>{
    usePageTitle("Invalid | proFocus");
    return(
        <div>
            {/* Invalid Route */}
            <img className="banner-img" src="./asset/notFound.svg" alt="" />
            <div className="home-text h-1 primary-color">Page Not Found</div>
        </div>

    )
}
export {InvalidRoute};