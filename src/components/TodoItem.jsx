import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';



export const TodoItem = () => {
  const [item, setItem] = useState({});
  
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();
  


  useEffect(() => {
    getTodo(id);
    return () => {
      setRedirect(false); //un mounting components
    };
  }, []);

  
  const handleDelete = (id)=> {
    fetch(`http://localhost:3001/todo/${id}`, {
        method: "DELETE",
    })
    setRedirect(true);
  
  }
  
  

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

  
  
  if (redirect) {
   
    return <Navigate to={"/home"} />;
    
  }

 
    return (
      <div className="popup-box">
        <div className="box">
         
          {
            <>
              <h1>{item.title}</h1>
              <button onClick={() => handleDelete(item.id)}> DELETE</button>
             
              <button onClick={() => handleStatus(item.status, item.id, item.title)}> {item.status ? <>NOT DONE</> : <> DONE</>}</button>
              <div>
              <Link to={`/todo/${item.id}/edit`}>EDIT</Link>
            </div>

            </>
          }

        </div>
      </div>
    );
  };