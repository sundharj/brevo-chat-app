// App.js
import React from "react";
import BrevoChat from "./BrevoChat";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to MediBharat</h1>
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
    backgroundColor: "#f5f5f5",
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
    fontSize: "2rem",
    margin: "0 0 10px",
  },
  subtitle: {
    color: "#555",
    fontSize: "1rem",
    marginTop: 8,
  },
};

export default App;
