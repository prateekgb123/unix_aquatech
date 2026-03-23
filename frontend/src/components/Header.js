import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // adjust for navbar height
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>

        {/* LEFT */}
        <div style={styles.left} onClick={() => scrollTo("home")}>
          <img src={logo} alt="logo" style={styles.logoImg} />
          <h2 style={styles.logoText}>Unix Aquatech</h2>
        </div>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div style={styles.menu}>
            <span onClick={() => scrollTo("home")}>Home</span>
            <span onClick={() => scrollTo("about")}>About</span>
            <span onClick={() => scrollTo("services")}>Services</span>
            <span onClick={() => scrollTo("gallery")}>Gallery</span>
            <span onClick={() => scrollTo("contact")}>Contact</span>
          </div>
        )}

        {/* MOBILE ICON */}
        {isMobile && (
          <div style={styles.hamburger} onClick={() => setOpen(true)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
        )}

        {/* MOBILE MENU */}
        {isMobile && open && (
          <div style={styles.mobileMenu}>
            <div style={styles.close} onClick={() => setOpen(false)}>✕</div>

            {["home", "about", "services", "gallery", "contact"].map((item) => (
              <span
                key={item}
                style={styles.mobileLink}
                onClick={() => scrollTo(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ))}
          </div>
        )}

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
    justifyContent: "space-between", // 🔥 FIX
    alignItems: "center"
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
    fontSize: "18px"
  },

  menu: {
    display: "flex",
    gap: "25px",
    color: "#fff",
    cursor: "pointer"
  },

  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer"
  },

  bar: {
    width: "25px",
    height: "3px",
    background: "#fff"
  },

  mobileMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "#0a2540",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px"
  },

  mobileLink: {
    color: "#fff",
    fontSize: "24px"
  },

  close: {
    position: "absolute",
    top: "20px",
    right: "25px",
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer"
  }
};

export default Header;