
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Navbar = () => {
  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: flex;
    gap: 50px;
    border: 2px solid black;
    height: 40px;
    background: teal;
    padding: 10px;
  `;

  return (
    <>
      <Main className="navbar">
        <Link to="/"><button className="home">Home</button></Link>
        <Link to="/section/history"><button className="history">History</button></Link>
        <Link to="/section/mystery"><button className="mystery">Mystery</button></Link>
        <Link to="/section/mythology"><button className="mythology">Mythology</button></Link>
        <Link to="/section/technology"><button className="technology">Technology</button></Link>
       
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </Main>
    </>
  );
};
