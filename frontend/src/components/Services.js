function Services() {
  const services = [
    "Industrial Effluent Treatment",
    "Pool Water Treatment",
    "Chemical Conditioning",
    "Environmental Consulting"
  ];

  return (
    <div style={styles.container}>
      <h2>Our Services</h2>

      <div style={styles.grid}>
        {services.map((s, i) => (
          <div key={i} style={styles.card}>
            <h3>{s}</h3>
            <p>Professional and efficient water treatment solutions.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 40px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }
};

export default Services;