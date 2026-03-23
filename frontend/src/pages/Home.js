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

  const heroImages = [
    "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    "https://res.cloudinary.com/demo/image/upload/balloons.jpg",
    "https://res.cloudinary.com/demo/image/upload/beach.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      <section id="home">
        <div>
          <h1>
            Transforming Water Into{" "}
            <span>Sustainable Solutions</span>
          </h1>

          <p>
            Advanced treatment systems for industries, ensuring purity,
            efficiency & environmental safety.
          </p>

          <button onClick={scrollToServices}>
            Explore Services →
          </button>
        </div>

        <div>
          <img src={heroImages[current]} alt="hero" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div>

          {/* TOP CARD */}
          <div>
            <h1>Unix Aquatech Services</h1>

            <p>
              Unix Aquatech Services is a Bangalore-based water treatment
              company specializing in advanced industrial and commercial
              solutions, offering expertise in designing and implementing
              ETP, STP, filtration, and ozonation systems that ensure
              efficiency, reliability, and long-term performance while
              delivering eco-friendly, sustainable, and cost-effective
              solutions tailored to modern environmental needs.
            </p>
          </div>

          <div style={{ height: "40px" }} />

          {/* GRID */}
          <div>
            <div>
              <h2>Who We Are</h2>
              <p>
                A team of experienced engineers focused on solving
                water treatment challenges using modern technology.
              </p>
            </div>

            <div>
              <h2>What We Offer</h2>
              <ul>
                <li>Effluent Treatment Plants (ETP)</li>
                <li>Water Filtration Systems</li>
                <li>Ozonation Systems</li>
                <li>Chemical Treatment Solutions</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div>
          <h2>Our Services</h2>

          <div>
            {services.map((s, i) => (
              <div key={i}>
                <div>
                  <img src={s.img} alt={s.name} />
                </div>

                <div>
                  <h3>{s.name}</h3>
                  <p>Reliable solutions</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div>
          <h2>Our Work</h2>

          <div>
            {projects.map((p, i) => (
              <div key={i}>
                <div>
                  {p.type === "image" ? (
                    <img src={p.url} alt="" />
                  ) : (
                    <video controls>
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
      <section id="contact">
        <div>
          <h2>Contact Us</h2>

          <div>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <textarea placeholder="Message" />
            <button>Send</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


/* 🔥 FINAL STYLES */

const styles = {
heroCard: {
  width: "100%",
  maxWidth: "800px", // 🔥 increase size
  margin: "auto",
  padding: "60px 50px",
  borderRadius: "24px",
  textAlign: "center",
  background: "#ffffff",
  boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
},

heroTitle: {
  fontSize: "44px", // 🔥 bigger
  fontWeight: "800",
  marginBottom: "25px",
  color: "#111827"
},

heroText: {
  fontSize: "19px", // 🔥 large readable paragraph
  lineHeight: "2",  // 🔥 airy spacing
  color: "#4b5563",
  maxWidth: "800px",
  margin: "auto"
},
centerWrapper: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
},
  /* 🔥 HERO */
hero: {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "100px 20px",
  background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
  color: "#fff",
  gap: "40px"
},

  heroLeft: {
    flex: 1,
    minWidth: "280px",
    maxWidth: "550px"
  },

  heroRight: {
    flex: 1,
    textAlign: "center",
    minWidth: "280px"
  },

  heroImage: {
    width: "100%",
    maxWidth: "380px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },

  heroTitle: {
    fontSize: "42px",
    fontWeight: "800",
    lineHeight: "1.3"
  },

  heroSub: {
    marginTop: "15px",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#d1d5db"
  },

  cta: {
    marginTop: "25px",
    padding: "12px 28px",
    background: "linear-gradient(90deg,#0072ff,#00c6ff)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s"
  },

  /* SECTION */
  section: {
    padding: "70px 20px"
  },

  sectionLight: {
    padding: "70px 20px",
    background: "#f5f7fa"
  },

  container: {
    maxWidth: "1100px",
    margin: "auto"
  },

  heading: {
    marginBottom: "25px",
    fontSize: "34px",
    fontWeight: "700",
    textAlign: "center"
  },

  /* GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "25px"
  },

  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "25px",
    marginTop: "30px"
  },

  /* CARDS */
  cardGlass: {
  maxWidth: "750px",
  margin: "auto",
  padding: "40px 30px",
  borderRadius: "20px",
  textAlign: "center",
  background: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
},

gridTwo: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "30px",
  alignItems: "stretch"
},

infoCard: {
  background: "#fff",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "0.3s"
},

infoHeading: {
  marginBottom: "12px",
  fontSize: "20px",
  fontWeight: "600",
  color: "#111827"
},

infoText: {
  lineHeight: "1.7",
  color: "#555"
},

list: {
  paddingLeft: "20px",
  lineHeight: "1.8",
  color: "#555"
},

highlight: {
  color: "#0072ff",
  fontWeight: "600"
},
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
  },

serviceCard: {
  background: "#fff",
  borderRadius: "18px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  transition: "0.3s",
  cursor: "pointer",
  overflow: "hidden" // 🔥 fixes overflow
},

mediaWrapper: {
  width: "100%",
  height: "180px",
  overflow: "hidden"
},

media: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block"
},
  /* INFO */
  infoCard: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
  },

  infoHeading: {
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "600"
  },

  infoText: {
    lineHeight: "1.7",
    color: "#555"
  },

  list: {
    paddingLeft: "20px",
    lineHeight: "1.7"
  },

  /* CONTACT */
  contactCard: {
    maxWidth: "420px",
    margin: "auto",
    padding: "25px",
    borderRadius: "16px",
    background: "#fff",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
  },

  input: {
    width: "100%",
    marginTop: "12px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd"
  },

  textarea: {
    width: "100%",
    marginTop: "12px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd"
  },

  button: {
    marginTop: "15px",
    padding: "12px",
    width: "100%",
    background: "#0072ff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600"
  },

  /* TEXT */
  title: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "600"
  },

  text: {
    marginBottom: "8px",
    color: "#555"
  }
};

export default Home;