import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function GalleryPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1 style={{ textAlign: "center" }}>Our Work</h1>

        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} style={styles.card}>
              {p.type === "image" ? (
                <img src={p.url} alt="" style={styles.media} />
              ) : (
                <video controls style={styles.media}>
                  <source src={p.url} />
                </video>
              )}

              <p style={styles.caption}>
                {p.title || "Water Treatment Project"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
  },
  card: {
    background: "#f9f9f9",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },
  media: {
    width: "100%",
    height: "200px",
    objectFit: "cover"
  },
  caption: {
    padding: "10px",
    fontWeight: "bold",
    textAlign: "center"
  }
};

export default GalleryPage;