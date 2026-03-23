import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://unix-aquatech.onrender.com/api/projects") // ✅ use deployed URL
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProjects(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />

      {/* HERO */}
     <section id="home" style={styles.hero}>
  <h1 style={{ fontSize: "clamp(24px, 6vw, 42px)" }}>
    Advanced Water Treatment Solutions
  </h1>
  <p style={{ fontSize: "clamp(14px, 3vw, 18px)" }}>
    Industrial • Commercial • Environmental
  </p>
</section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.card}>
            <h1 style={styles.title}>Unix Aquatech Services</h1>

            <p style={styles.text}>
              Unix Aquatech Services is a Bangalore-based organization dedicated to providing advanced and sustainable water treatment solutions. 
              We specialize in designing, implementing, and maintaining systems that ensure water purity, safety, and environmental compliance across 
              industrial and commercial sectors. 
              
              Our core services include industrial effluent treatment plants (ETP), water purification and filtration systems, ozonation technology 
              for pools and process water, and chemical treatment solutions.
              
              With a team of experienced engineers and industry professionals, we leverage modern technologies to deliver efficient and reliable outcomes. 
              We strongly believe in sustainability and environmental responsibility. Our solutions are designed not only to meet regulatory standards 
              but also to reduce water wastage, improve operational efficiency, and promote eco-friendly practices.
              
              At Unix Aquatech Services, customer satisfaction is at the heart of everything we do. We provide end-to-end support—from consultation 
              and system design to installation and maintenance—ensuring long-term performance and value for our clients.
            </p>
          </div>

          <div style={styles.gridTwo}>
            <div style={styles.card}>
              <h2>Who We Are</h2>
              <p>
                 We are a team of experienced engineers and professionals dedicated to solving complex water treatment challenges using modern technologies. 
              Our goal is to improve water quality, reduce environmental impact, and ensure compliance with industry standards while delivering cost-effective solutions.
              </p>
            </div>

            <div style={styles.card}>
              <h2>What We Offer</h2>
              <ul style={styles.list}>
                 <li>Industrial Effluent Treatment Plants (ETP)</li>
              <li>Water Purification & Filtration Systems</li>
              <li>Ozonation Systems for Pools & Water Treatment</li>
              <li>Chemical Conditioning & Treatment Solutions</li>
              <li>Environmental Consulting & Compliance Support</li>
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
            {[
              "Industrial Effluent Treatment",
              "Ozonation Systems",
              "Chemical Conditioning",
              "Environmental Consulting",
              "Water Filtration Systems",
              "Wastewater Recycling"
            ].map((s, i) => (
              <div key={i} style={styles.cardHover}>
                <h3>{s}</h3>
                <p>Reliable and efficient solutions.</p>
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
            {projects.length === 0 ? (
              <p>Loading...</p>
            ) : (
              projects.map((p, i) => (
                <div key={i} style={styles.card}>
                  {p.type === "image" ? (
                    <img src={p.url} alt="" style={styles.media} />
                  ) : (
                    <video controls style={styles.media}>
                      <source src={p.url} />
                    </video>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.sectionLight}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Contact Us</h2>

          <div style={styles.contactCard}>
            <p><b>Location:</b> Bangalore, India</p>
            <p><b>Email:</b> unixaquatech@gmail.com</p>
            <p><b>Phone:</b> +91 XXXXX XXXXX</p>

            <input placeholder="Your Name" style={styles.input} />
            <input placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Message" style={styles.textarea}></textarea>

            <button style={styles.button}>Send Message</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  p: {
  marginBottom: "10px"
},
  container: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "0 15px",
    textAlign: "center"
  },

  hero: {
    padding: "clamp(60px, 10vw, 120px) 20px",
    background: "linear-gradient(to bottom, #e6f0fa, #cfe3f3)",
    textAlign: "center"
  },

  section: {
    padding: "60px 15px"

  },

  sectionLight: {
    padding: "clamp(50px, 8vw, 80px) 0",
    background: "#f9f9f9"
  },

  title: {
    fontSize: "clamp(22px, 4vw, 30px)",
    marginBottom: "15px"
  },

  text: {
    lineHeight: "1.7",
    fontSize: "clamp(14px, 2.5vw, 16px)"
  },

  heading: {
    marginBottom: "30px",
    fontSize: "clamp(20px, 4vw, 28px)"
  },

  /* ✅ AUTO RESPONSIVE GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },

  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },

  card: {
    background: "#fff",
    padding: "clamp(15px, 3vw, 25px)",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },

  cardHover: {
    background: "#fff",
    padding: "clamp(15px, 3vw, 25px)",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s"
  },

  media: {
    width: "100%",
    height: "clamp(180px, 30vw, 220px)",
    objectFit: "cover",
    borderRadius: "10px"
  },

  list: {
    textAlign: "left",
    paddingLeft: "20px",
    fontSize: "clamp(14px, 2.5vw, 16px)"
  },

contactCard: {
  maxWidth: "330px",   // 🔥 main fix
  width: "100%",
  margin: "20px auto",
  background: "#fff",
  padding: "18px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "left"
},
  input: {
  width: "90%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px"
},

textarea: {
  width: "90%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  minHeight: "120px",
  fontSize: "14px"
},

 button: {
  marginTop: "15px",
  padding: "14px",
  width: "100%",
  background: "#0a2540",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "500"
}
};

export default Home;