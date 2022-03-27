import { Link } from "react-router-dom";

const links = [
  // Fix this links array, it's an array of objects {to: "", title: ""}
  {to:"/",title:"Home"},{to:"/products",title:"All Products"}
];

export const Navbar = () => {
  return (
    <>
      <div style = {{ display: "flex", justifyContent:"center"}} className="navbar">
      {<button  className="navbar" onClick >a</button>}
      {links.map((el)=>{
        return(
          <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
          {el.title}
        </Link>
        // <button className="history"> Link to history here  </button>  
      );
    })}

 
</div>
    </>
  );
};
