function Hero() {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1>Advanced Water Treatment Solutions</h1>
        <p>Reliable • Efficient • Sustainable</p>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    height: "60vh",
    background: "url('/images/water.jpg') center/cover no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    background: "rgba(0,0,0,0.5)",
    padding: "40px",
    color: "white",
    borderRadius: "10px",
    textAlign: "center"
  }
};

export default Hero;