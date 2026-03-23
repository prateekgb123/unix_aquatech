import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /* ✅ TRACK SCREEN SIZE */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ✅ SCROLL FUNCTION */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.offsetTop - 70;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

    setOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>

        {/* LEFT */}
        <div style={styles.left}>
          <img src={logo} alt="logo" style={styles.logoImg} />
          <h2 style={styles.logoText}>Unix Aquatech</h2>
        </div>

        {/* ✅ HAMBURGER */}
        {isMobile && !open && (
          <div style={styles.hamburger} onClick={() => setOpen(true)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
        )}

        {/* ✅ DESKTOP MENU */}
        {!isMobile && (
          <div style={styles.menu}>
            <span
              style={styles.mobileLink}
              onClick={() => scrollTo("home")}
              onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}
            >
              Home
            </span>
            <span style={styles.link} onClick={() => scrollTo("about")}>About</span>
            <span style={styles.link} onClick={() => scrollTo("gallery")}>Gallery</span>
            <span style={styles.link} onClick={() => scrollTo("contact")}>Contact</span>
          </div>
        )}

        {/* ✅ FULL SCREEN MOBILE MENU */}
        {isMobile && open && (
          <div style={styles.mobileMenu}>

            {/* CLOSE BUTTON */}
            <div
              style={styles.close}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => (e.target.style.transform = "rotate(90deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "rotate(0deg)")}
            >
              ✕
            </div>

            {/* MENU ITEMS */}
            {["home", "about", "gallery", "contact"].map((item) => (
              <span
                key={item}
                style={styles.mobileLink}
                onClick={() => scrollTo(item)}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
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

/* ================= STYLES ================= */

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
    position: "relative"
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

  /* DESKTOP MENU */
  menu: {
    display: "flex",
    gap: "25px"
  },

  link: {
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s"
  },

  /* HAMBURGER */
  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer"
  },

  bar: {
    width: "25px",
    height: "3px",
    background: "#fff",
    borderRadius: "2px"
  },

  /* 🔥 FULL SCREEN MENU */
 mobileMenu: {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "linear-gradient(135deg, #0a2540, #123b63)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000,
  animation: "slideIn 0.4s ease"
},

mobileLink: {
  color: "#fff",
  fontSize: "24px",
  fontWeight: "600",
  padding: "15px 40px",
  width: "80%",
  textAlign: "center",
  borderBottom: "1px solid rgba(255,255,255,0.2)",
  cursor: "pointer",
  transition: "0.3s"
},

  close: {
    position: "absolute",
    top: "20px",
    right: "25px",
    fontSize: "28px",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s"
  }
};

export default Header;