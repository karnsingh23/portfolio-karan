import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loading-text">Digital Presence Synchronizing...</p>
    </div>
  );
}

export default Loader;
