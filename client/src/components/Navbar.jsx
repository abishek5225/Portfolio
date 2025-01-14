import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="">  
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About Me</Link></li>
        <li><Link to="/blogs" style={styles.link}>Blogs</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff",
    
    
  },
  navLinks: { display: "flex", listStyleType: "none", margin: 0, padding: 0 },
  link: {
    marginLeft: "1rem",
    textDecoration: "none",
    color: "#fff",
  },
};

export default Navbar;
