import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const {section}=useParams()
  
const [books,setBooks]=useState([])

useEffect(()=>{
  axios.get(`http://localhost:8080/${section}`).then(({data})=>{
    setBooks(data)
  })
},[section])
  const Main = styled.div`
    /* Same as Homepage */
    display: flex;
    gap:60px;
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {books.map((e)=>{
          return <BookCard key={e.id} id={e.id} imageUrl={e.imageUrl} title={e.title} price={e.price}/>
        })}
      </Main>
    </>
  );
};
