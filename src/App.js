import React, { useEffect, useState } from "react";
import BrevoChat from "./BrevoChat";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <h1
        style={{
          ...styles.title,
          fontSize: isMobile ? "1.5rem" : "2rem",
          maxWidth: isMobile ? "90%" : "600px",
        }}
      >
        Welcome to MediBharat
      </h1>
      <p style={styles.subtitle}>
        We're here to help! Use the chat widget in the corner.
      </p>
      <BrevoChat />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    color: "#333",
    margin: "0 0 10px",
    lineHeight: 1.2,
  },
  subtitle: {
    color: "#555",
    fontSize: "1rem",
    marginTop: 8,
  },
};

export default App;