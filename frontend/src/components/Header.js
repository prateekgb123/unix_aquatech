import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>

        {/* LEFT: LOGO + TITLE */}
        <div style={styles.left}>
          <img src={logo} alt="Unix Aquatech Logo" style={styles.logoImg} />
          <h2 style={styles.logoText}>Unix Aquatech</h2>
        </div>

        {/* RIGHT: MENU */}
        <div style={styles.menu}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/gallery" style={styles.link}>Gallery</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    width: "100%",
    background: "#0a2540",
    zIndex: 1000
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  /* LEFT SIDE */
  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  logoImg: {
    width: "30px",
    height: "30px",
    objectFit: "contain",
    background: "#fff",
    borderRadius: "6px",
    padding: "5px"
  },

  logoText: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600",
    margin: 0
  },

  /* RIGHT SIDE */
  menu: {
    display: "flex",
    alignItems: "center"
  },

  link: {
    marginLeft: "25px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    transition: "0.3s"
  }
};

export default Header;