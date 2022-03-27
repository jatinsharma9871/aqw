import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
            <Route path='/' element={<Home/>}>  </Route>
            <Route path='/products' element={<BookCard/>}>  </Route>
            <Route path='/products/:id' element={<BookDetailsPage/>}>  </Route>
          </Routes>

          </>
          );
        };
    
    
