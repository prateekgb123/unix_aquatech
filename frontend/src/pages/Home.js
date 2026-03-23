import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://unix-aquatech.onrender.com/api/projects")
      .then((res) => {
        const imgs = res.data.filter((item) => item.type === "image");
        setImages(imgs.slice(0, 6));
      });
  }, []);

  return (
    <>
      <Header />

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <h1 className="fade">Advanced Water Treatment Solutions</h1>
        <p className="fade">Industrial • Commercial • Environmental</p>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2>About Us</h2>
          <p>
            Unix Aquatech Services is a Bangalore-based company providing
            advanced and sustainable water treatment solutions. We specialize in
            industrial effluent treatment, filtration systems, ozonation, and
            environmental consulting with a strong focus on quality and
            sustainability.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={styles.sectionLight}>
        <div style={styles.container}>
          <h2>Our Work</h2>
          <div style={styles.grid}>
            {images.map((img, i) => (
              <img key={i} src={img.url} alt="" className="imgHover fade" />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2>Our Services</h2>
          <div style={styles.grid}>
            {[
              "Industrial Effluent Treatment",
              "Ozonation Systems",
              "Chemical Conditioning",
              "Environmental Consulting",
              "Water Filtration Systems",
              "Wastewater Recycling"
            ].map((s, i) => (
              <div key={i} className="card fade">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.sectionLight}>
        <div style={styles.container}>
          <h2>Contact Us</h2>
          <p>Email: unixaquatech@gmail.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "0 20px"
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#e6f0fa"
  },

  section: {
    padding: "60px 0"
  },

  sectionLight: {
    padding: "60px 0",
    background: "#f9f9f9"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  }
};

export default Home;