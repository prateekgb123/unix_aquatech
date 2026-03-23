import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

      <div style={styles.page}>
        <div style={styles.container}>

          {/* MAIN INTRO */}
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

          {/* WHO WE ARE */}
          <div style={styles.card}>
            <h2 style={styles.heading}>Who We Are</h2>
            <p style={styles.text}>
              We are a team of experienced engineers and professionals dedicated to solving complex water treatment challenges using modern technologies. 
              Our goal is to improve water quality, reduce environmental impact, and ensure compliance with industry standards while delivering cost-effective solutions.
            </p>
          </div>

          {/* WHAT WE OFFER */}
          <div style={styles.card}>
            <h2 style={styles.heading}>What We Offer</h2>
            <ul style={styles.list}>
              <li>Industrial Effluent Treatment Plants (ETP)</li>
              <li>Water Purification & Filtration Systems</li>
              <li>Ozonation Systems for Pools & Water Treatment</li>
              <li>Chemical Conditioning & Treatment Solutions</li>
              <li>Environmental Consulting & Compliance Support</li>
            </ul>
          </div>

          {/* MISSION & VISION */}
          <div style={styles.row}>
            <div style={styles.smallCard}>
              <h3 style={styles.subHeading}>Our Mission</h3>
              <p style={styles.textSmall}>
                To provide clean, safe, and sustainable water treatment solutions that meet industry and environmental standards.
              </p>
            </div>

            <div style={styles.smallCard}>
              <h3 style={styles.subHeading}>Our Vision</h3>
              <p style={styles.textSmall}>
                To become a leading name in water treatment innovation and environmental sustainability through advanced technologies.
              </p>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div style={styles.card}>
            <h2 style={styles.heading}>Why Choose Unix Aquatech?</h2>

            <div style={styles.features}>
              <div style={styles.featureBox}>✔ Experienced Engineers</div>
              <div style={styles.featureBox}>✔ Advanced Technology</div>
              <div style={styles.featureBox}>✔ Cost-Effective Solutions</div>
              <div style={styles.featureBox}>✔ Eco-Friendly Approach</div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  page: {
    background: "#f4f6f8",
    padding: "60px 20px"
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px"
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  },

  row: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },

  smallCard: {
    flex: "1",
    minWidth: "280px",
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },

  title: {
    fontSize: "34px",
    fontWeight: "700",
    textAlign: "center",
    color: "#0a2540",
    marginBottom: "15px"
  },

  heading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#0a2540",
    marginBottom: "10px"
  },

  subHeading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#0a2540"
  },

  text: {
    fontSize: "16.5px",
    lineHeight: "1.8",
    color: "#444",
    textAlign: "justify"
  },

  textSmall: {
    fontSize: "15.5px",
    lineHeight: "1.7",
    color: "#555"
  },

  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
    color: "#444"
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "15px"
  },

  featureBox: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "500"
  }
};

export default About;