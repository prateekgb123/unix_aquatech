import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import etp from "../assets/etp.jpg";
import ozone from "../assets/ozonation.jpg";
import chemical from "../assets/chemical.jpg";
import consulting from "../assets/consulting.jpg";
import stp from "../assets/stp.jpg";
import filtration from "../assets/filtration.jpg";

function Home() {
  const services = [
    { name: "ETP", img: etp },
    { name: "Ozonation", img: ozone },
    { name: "Chemical", img: chemical },
    { name: "Consulting", img: consulting },
    { name: "STP", img: stp },
    { name: "Filtration", img: filtration },
  ];

  const [projects, setProjects] = useState([]);
  const [current, setCurrent] = useState(0);

  // 🔥 FILTER ONLY IMAGES FROM CLOUDINARY API
const heroImages = projects
  .filter(p => p.type === "image")
  .map(p =>
    p.url.replace("/upload/", "/upload/w_1000,h_500,c_fill/")
  );

  useEffect(() => {
  if (heroImages.length === 0) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, 4000);

  return () => clearInterval(interval);
}, [heroImages]);

  useEffect(() => {
    axios
      .get("https://unix-aquatech.onrender.com/api/projects")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProjects(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const scrollToServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>
            Transforming Water Into{" "}
            <span style={styles.highlight}>Sustainable Solutions</span>
          </h1>

          <p style={styles.heroSub}>
            Advanced treatment systems for industries, ensuring purity,
            efficiency & environmental safety.
          </p>

          <button style={styles.cta} onClick={scrollToServices}>
            Explore Services →
          </button>
        </div>

        <div style={styles.heroRight}>
          <img
  src={
    heroImages[current] ||
    "https://via.placeholder.com/800x500?text=Loading..."
  }
  alt="hero"
  style={styles.heroImage}
/>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.cardGlass}>
            <h1 style={styles.heading}>Unix Aquatech Services</h1>

            <p style={styles.infoText}>
              Unix Aquatech Services is a Bangalore-based water treatment and environmental solutions company dedicated to delivering innovative, efficient, and sustainable water management systems. With a strong foundation in engineering excellence and industry expertise, we specialize in designing, developing, and implementing advanced treatment technologies for industrial, commercial, and institutional applications. Our approach combines modern technology with practical field experience to provide customized solutions that address complex water challenges. From wastewater treatment to purification and reuse systems, we focus on delivering high-performance solutions that ensure regulatory compliance, operational efficiency, and long-term reliability. At Unix Aquatech Services, we believe in creating environmentally responsible solutions that not only solve current water issues but also contribute to a sustainable future. Our commitment to quality, innovation, and customer satisfaction drives us to continuously improve and adapt to evolving industry needs.
            </p>
          </div>

          <div style={{ height: "40px" }} />

          <div style={styles.gridTwo}>
            <div style={styles.infoCard}>
              <h2 style={styles.infoHeading}>Who We Are</h2>
              <p style={styles.infoText}>
                Unix Aquatech Services is a team of dedicated engineers and water treatment specialists committed to delivering innovative and sustainable solutions for modern water challenges. Based in Bangalore, we bring together technical expertise, industry experience, and a passion for environmental responsibility to design efficient and reliable treatment systems for industries and communities.
              </p>
            </div>

            <div style={styles.infoCard}>
              <h2 style={styles.infoHeading}>What We Offer</h2>
              <ul style={styles.list}>
                <li>Effluent Treatment Plants (ETP)</li>
                <li>Water Filtration Systems</li>
                <li>Ozonation Systems</li>
                <li>Chemical Treatment Solutions</li>
                <li>Consulting & Custom Solutions</li>
                <li>STP & Sewage Treatment Solutions</li>
                <li>Maintenance & Support Services</li>
                <li>Environmental Compliance Assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.sectionLight}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Our Services</h2>

          <div style={styles.grid}>
            {services.map((s, i) => (
              <div key={i} style={styles.serviceCard}>
                <div style={styles.mediaWrapper}>
                  <img src={s.img} alt={s.name} style={styles.media} />
                </div>

                <div style={{ padding: "15px" }}>
                  <h3>{s.name}</h3>
                  <p>Reliable solutions</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Our Work</h2>

          <div style={styles.grid}>
            {projects.map((p, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.mediaWrapper}>
                  {p.type === "image" ? (
                    <img src={p.url} alt="" style={styles.media} />
                  ) : (
                    <video controls style={styles.media}>
                      <source src={p.url} />
                    </video>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Contact Us</h2>

          <div style={styles.contactCard}>
            <input placeholder="Name" style={styles.input} />
            <input placeholder="Email" style={styles.input} />
            <textarea placeholder="Message" style={styles.textarea} />
            <button style={styles.button}>Send</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ✅ CLEAN FIXED STYLES (NO DUPLICATES) */
const styles = {
  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 20px",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    color: "#fff",
    gap: "40px",
  },

  heroLeft: { flex: 1, minWidth: "280px", maxWidth: "550px" },
  heroRight: {
  flex: 1,
  textAlign: "center",
  minWidth: "280px",
  display: "flex",
  justifyContent: "center"
},

  heroImage: {
  width: "100%",
  height: "400px",        // ✅ FIXED HEIGHT (important)
  objectFit: "cover",     // ✅ crop instead of stretch
  borderRadius: "20px",
  display: "block"
},

  heroTitle: { fontSize: "42px", fontWeight: "800" },

  heroSub: { marginTop: "15px", color: "#d1d5db" },

  cta: {
    marginTop: "20px",
    padding: "12px 28px",
    background: "#0072ff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  section: { padding: "70px 20px" },
  sectionLight: { padding: "70px 20px", background: "#f5f7fa" },

  container: { maxWidth: "1100px", margin: "auto" },

  heading: { textAlign: "center", marginBottom: "25px" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "25px",
  },

  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "25px",
  },

  serviceCard: {
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
  },

  mediaWrapper: { height: "180px", overflow: "hidden" },

  media: { width: "100%", height: "100%", objectFit: "cover" },

  infoCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
  },

  infoHeading: { marginBottom: "10px" },

  infoText: { color: "#555" },

  list: { paddingLeft: "20px" },

contactCard: {
  maxWidth: "450px",
  margin: "auto",
  padding: "35px 30px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
  border: "1px solid rgba(255,255,255,0.3)"
},

 input: {
  width: "100%",
  marginTop: "15px",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
  outline: "none",
  transition: "0.3s",
  background: "#f9fafb"
},

  textarea: {
  width: "100%",
  marginTop: "15px",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
  minHeight: "110px",
  outline: "none",
  transition: "0.3s",
  background: "#f9fafb"
},


  button: {
  marginTop: "20px",
  padding: "14px",
  width: "100%",
  background: "linear-gradient(90deg,#0072ff,#00c6ff)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "16px",
  transition: "0.3s",
  boxShadow: "0 10px 25px rgba(0,114,255,0.3)"
},

  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
  },

  cardGlass: {
    padding: "30px",
    borderRadius: "16px",
    background: "#fff",
    textAlign: "center",
  },

  highlight: { color: "#00c6ff" },
};

export default Home;