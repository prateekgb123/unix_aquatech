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
    background: "rgba(10, 37, 64, 0.85)",
    backdropFilter: "blur(12px)",
    zIndex: 1000,
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "14px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer"
  },

  logoImg: {
    width: "42px",
    height: "42px",
    background: "#fff",
    padding: "6px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },

  logoText: {
    color: "#fff",
    margin: 0,
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "0.5px"
  },

  /* 🔥 DESKTOP MENU */
  menu: {
    display: "flex",
    gap: "28px",
    color: "#e5e7eb",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500"
  },

  menuItem: {
    position: "relative",
    transition: "0.3s"
  },

  /* 🔥 HAMBURGER */
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
    borderRadius: "3px",
    transition: "0.3s"
  },

  /* 🔥 MOBILE MENU (PREMIUM FULLSCREEN) */
  mobileMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "35px",
    animation: "fadeIn 0.4s ease"
  },

  mobileLink: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "0.3s",
    padding: "10px 20px",
    borderRadius: "8px"
  },

  close: {
    position: "absolute",
    top: "25px",
    right: "25px",
    fontSize: "28px",
    color: "#fff",
    cursor: "pointer",
    background: "rgba(255,255,255,0.1)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
export default Header;