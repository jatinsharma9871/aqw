import { Link } from "react-router-dom"
import { Todo } from "./Todo"
import {useDispatch, useSelector} from "react-redux"
import { Navigate } from 'react-router-dom';
import { userLogin } from "../features/LogIn/Action";

export const Home = () => {

    const token = useSelector((state) => state.logInReducer.token);
    const dispatch = useDispatch();
    const localToken = localStorage.getItem('token');
    dispatch(userLogin(localToken));
    if (!token) {
        console.log("inside home", token)
        return  <Navigate to={"/login"} />; 
    }
    return (
        < div >
           
            <h3>Home page</h3>
            <Todo/>
        </div >
    )
}