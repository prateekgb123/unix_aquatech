import logo from "../assets/logo.png";

function Header() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>

        {/* LEFT */}
        <div style={styles.left}>
          <img src={logo} alt="logo" style={styles.logoImg} />
          <h2 style={styles.logoText}>Unix Aquatech</h2>
        </div>

        {/* RIGHT */}
        <div style={styles.menu}>
          <span onClick={() => scrollTo("home")} style={styles.link}>Home</span>
          <span onClick={() => scrollTo("about")} style={styles.link}>About</span>
          <span onClick={() => scrollTo("gallery")} style={styles.link}>Gallery</span>
          <span onClick={() => scrollTo("contact")} style={styles.link}>Contact</span>
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
    margin: "auto",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  logoImg: {
    width: "40px",
    height: "40px",
    background: "#fff",
    padding: "5px",
    borderRadius: "6px"
  },

  logoText: {
    color: "#fff",
    margin: 0,
    fontSize: "20px"
  },

  menu: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },

  link: {
    color: "#fff",
    cursor: "pointer"
  }
};

export default Header;