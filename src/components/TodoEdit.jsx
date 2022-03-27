import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const TodoEdit = () => {

    const [input, setInput] = useState("");
   
    const { id } = useParams();
    const [item, setItem] = useState({});


    useEffect(() => {
        getTodo(id);
    }, []);
    
    const handleStatus = (status, id, title) => {
        let payload = {};
        if (status) {
             payload ={
                title:title,
                status:false,
            };
        }
        else {
             payload ={
                title:title,
                status:true,
            };
        }
    
        console.log(payload)
        fetch(`http://localhost:3001/todo/${id}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
        })
        getTodo(id);
    }
    

    const getTodo = (id) => {
        fetch(`http://localhost:3001/todo/${id}`)
            .then((d) => d.json())
          .then((res) => {
            console.log("res", res)
            setItem(res)
          });
    }

    
    return (
        <div>
            <h1>{item.title}</h1>
            <input type="text" value={input}  placeholder="Add Todo" onChange={(e) =>setInput(e.target.value)}/>

            <button onClick={() => { handleStatus(item.status, item.id, input) }}>Add</button>
            </div>
    )
}