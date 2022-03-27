import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { addTodo } from "../features/Todo/Action"

export const Todo = () =>{
    const [input, setInput] = useState("");
    const todo = useSelector((state) => state.todoReducer.todo)
    
    const dispatch = useDispatch()

    const addNewTodo = () => {
        
        
        const payload ={
            title:input,
            status:false,
        };

        fetch("http://localhost:3001/todo", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
        }).then((d) => d.json()).then((res) => {
            getTodo();
            
        })

    }



    const getTodo = () => {
        fetch("http://localhost:3001/todo")
            .then((d) => d.json())
            .then((res) => dispatch(addTodo(res)));
    }
    
    useEffect(() => {getTodo()}, [])
    
    
    return <div>
                <div>
                    <h1>Count : {`${todo.length}`}</h1>
                </div>
    <input type="text" value={input}  placeholder="Add Todo" onChange={(e) =>setInput(e.target.value)}/>

        <button onClick={() => { addNewTodo() }}>Add</button>

       
        {todo.map((e) => (
            
            <div key={e.id}>
                
                <Link to={`/todo/${e.id}`}><h1>{e.title}</h1></Link>
            </div>
            
        ))}

    </div>
}
