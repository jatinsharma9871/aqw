import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { userLogin, userLogOut } from "../features/LogIn/Action";
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";


export const Login = () => {


    
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

   

    const token = useSelector((state) => state.logInReducer.token)
    
    const dispatch = useDispatch();

    const handleSubmit = () => {

       fetch(`https/reqres`)
        

        const payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }

        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
          
        }).then((d) => d.json()).then((res) => {
            console.log(res);
            localStorage.setItem('token', JSON.stringify(res));
            const localToken = localStorage.getItem('token');
            dispatch(userLogin(localToken));
            return  <Navigate to={"/home"} />;
        })

    }

    const localToken = localStorage.getItem('token');
    dispatch(userLogin(localToken));
    

    console.log(token)
 
    console.log("localtoken", localToken)

    const handleLogout = () => {
        dispatch(userLogin({}))
        console.log("logout", token)
        localStorage.setItem('token',"");
        console.log("localtoken", localToken)
    }

    if (!token) {
        
        return (
            <div>
                <input type="text" placeholder="name" onChange={(e) => setId(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
               
                <button onClick={() => { handleSubmit() }}>Login</button>
            </div>
        )

    }
    return (
            <div>
                <h1>
                    You are logged in
                </h1>

                <button onClick={() => { handleLogout() }}>LogOut</button>

            </div>
    )
}

