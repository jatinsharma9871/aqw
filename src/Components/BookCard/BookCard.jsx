import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookDetailsPage } from "../BookDetailsPage/BookDetailsPage";

export const BookCard = ({ id, imageUrl, title, price,onclick}) => {
  
 return (<>
       <div onClick={()=>{
        <Link to={`/bookdetailspage/${id}`}></Link>
       }}>
         <img src={imageUrl} alt="" />
         <h1>price:{price}</h1>
         <h2>Title:{title}</h2>
         <h3>Price:{price}</h3>
       </div>
 </>)

};



  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>