import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("https://unix-aquatech.onrender.com/api/projects")
      .then(res => {
        const imgs = res.data.filter(item => item.type === "image");
        setImages(imgs.slice(0, 3));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 className="fade" style={styles.title}>
            Advanced Water Treatment Solutions
          </h1>
          <p className="fade" style={styles.subtitle}>
            Industrial • Commercial • Environmental
          </p>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <div style={styles.imageGrid}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt=""
                className="fade"
                style={{
                  ...styles.image,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES (3 + 3 GRID) */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Our Core Services</h2>

          <div style={styles.grid}>
            {[
              "Industrial Effluent Treatment",
              "Ozonation Systems",
              "Chemical Conditioning",
              "Environmental Consulting",
              "Water Filtration Systems",
              "Wastewater Recycling"
            ].map((s, i) => (
              <div key={i} className="card fade">
                <h3>{s}</h3>
                <p>
                  Reliable and efficient solutions tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Why Choose Us?</h2>

          <div style={styles.grid}>
            {[
              "Experienced Engineers",
              "Modern Technology",
              "Cost Effective",
              "Eco-Friendly Solutions",
              "24/7 Support",
              "Custom Solutions"
            ].map((f, i) => (
              <div key={i} className="card fade">
                ✔ {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================== STYLES ================== */

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "0 20px"
  },

  hero: {
    background: "linear-gradient(to bottom, #eef3f8, #d6eaf3)",
    padding: "90px 20px",
    textAlign: "center"
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#0a2540",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#555",
    fontSize: "18px"
  },

  section: {
    padding: "70px 0"
  },

  sectionLight: {
    padding: "70px 0",
    background: "#f9f9f9"
  },

  heading: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "26px",
    color: "#0a2540"
  },

  /* IMAGE GRID */
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px"
  },

  image: {
    width: "100%",
    height: "230px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease"
  },

  /* 3 COLUMN GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // ✅ 3 per row
    gap: "25px"
  }
};

export default Home;