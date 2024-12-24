import { useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

export default function CheckAuth() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user")); // Retrieve data
    // const {user} = useContext(UserContext)
    // console.log(location.pathname, user);
    
    useEffect(() => {

        if (!user || user === null) {
            navigate("/auth/login")
        } else if(user.role !== 'admin'){
            navigate("/auth/login")
        }
    })

}