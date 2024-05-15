import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <div className="text-5xl text-center font-bold flex justify-center items-center min-h-96">Loading<span className="loading loading-dots loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace={true}></Navigate>
};

export default PrivateRoute;