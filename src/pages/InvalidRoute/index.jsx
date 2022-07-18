import React from "react";
const InvalidRoute=()=>{
    return(
        <div>
            {/* Invalid Route */}
            <img className="banner-img" src="./asset/notFound.svg" alt="" />
            <div className="home-text h-1 primary-color">Page Not Found</div>
        </div>

    )
}
export {InvalidRoute};