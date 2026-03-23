import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://unix-aquatech.onrender.com/api/projects")
      .then(res => {
        console.log("DATA:", res.data); // 🔥 DEBUG
        setProjects(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div id="gallery" style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>

      <div style={styles.grid}>
        {projects.length === 0 ? (
          <p>No images found</p>
        ) : (
          projects.map((p, i) => (
            <div key={i}>
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
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },
  media: {
    width: "100%",
    borderRadius: "10px"
  }
};

export default Gallery;