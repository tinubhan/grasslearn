import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
      <>
        <div style={navbarStyle}>
            <Link to ="/" style={{textDecoration:null , color:"inherit"}}>
            <div style={titleStyle}>Small comp X</div>
            </Link>
          
          <div style={menuContainerStyle}>
            <Link to ="/about" style={{textDecoration:null , color:"inherit"}}><div style={menuItemStyle}>About </div></Link>
            <Link to="/contact" style={{textDecoration:null , color:"inherit"}}><div style={menuItemStyle}>Contact</div></Link>
            {/* <div style={menuItemStyle}>Menu 3</div> */}
          </div>
        </div>
      </>
    );
  };

  
   
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
  };
   
  const titleStyle = {
    fontSize: "1.5em",
  };
   
  const menuContainerStyle = {
    display: "flex",
  };
   
  const menuItemStyle = {
    marginLeft: "10px",
    cursor: "pointer",
  };

  export default NavbarComponent