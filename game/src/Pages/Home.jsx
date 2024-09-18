import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Go up one level to access App.css in src

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Tic-Tac-Toe</h1>
      <p style={styles.paragraph}>Choose an option:</p>
      <div style={styles.buttonContainer}>
        <Link to="/game">
          <button style={styles.button}>Play Game</button>
        </Link>
        <Link to="/rules">
          <button style={styles.button}>Rules</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f7',
  },
  heading: {
    fontSize: '3rem',
    color: '#032858',
    marginBottom: '1.5rem',
  },
  paragraph: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Adds spacing between buttons
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#032858',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#054a91',
  },
};

export default Home;
