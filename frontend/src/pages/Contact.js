import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />

      <div style={styles.container}>
        <h1>Contact Us</h1>

        <div style={styles.card}>
          <p><b>Location:</b> Bangalore, India</p>
          <p><b>Email:</b> unixaquatech@gmail.com</p>
          <p><b>Phone:</b> +91 XXXXX XXXXX</p>

          <h3>Send Enquiry</h3>

          <input placeholder="Your Name" style={styles.input} />
          <input placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>

          <button style={styles.button}>Send</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: "60px",
    textAlign: "center"
  },
  card: {
    maxWidth: "400px",
    margin: "auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px"
  },
  button: {
    background: "#2c5364",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    marginTop: "10px",
    cursor: "pointer"
  }
};

export default Contact;