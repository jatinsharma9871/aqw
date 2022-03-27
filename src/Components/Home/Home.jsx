import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


export const Home = () => {




const [books,setBooks]=useState([])

useEffect(()=>{
  axios.get("http://localhost:8080/books").then(({data})=>{
    setBooks(data)
  })
},[])


  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: flex;
    gap: 50px;
  `;


  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {books.map((e)=>{
          return <BookCard key={e.id} id={e.id} imageUrl={e.imageUrl} title={e.title} price={e.price} />
        })}
      </Main>
    </div>
  );
};
