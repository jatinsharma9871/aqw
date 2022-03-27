import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {

  // export const HomePage = () => {
    const [list,setList]= useState([]);
    console.log(list)
   useEffect(()=>{
   axios.get("http://localhost:3004/BookCard").then((res)=>{
    setList(res.data)
    console.log(list) 


  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;
 })
},[])
  return (
    <>
    <div className="homeContainer" style={{
      display: "flex",
      justifyContent: "space-evenly",
      paddingTop: "175px",
    }}>
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
        
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {list.map((el) => {
          return <>   <Link to={`/products/${el.id}`} key={el.id} >{/* Show product image and name */ el.name}</Link> <br/> </>;
        })}
      
      </Main>
      </div>
      </>
    );
  };
  