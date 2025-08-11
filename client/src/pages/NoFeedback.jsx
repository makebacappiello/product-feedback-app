import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import noFeedbackImage from "../assets/suggestions/illustration-empty.svg";

export default function NoFeedback() {
  return (
    <div className="no-feedback-wrapper">
      <div className="no-feedback-card">
        <img
          src={noFeedbackImage}
          alt="No feedback illustration"
          className="no-feedback-image"
        />
        <h2 className="no-feedback-title">There is no feedback yet.</h2>
        <p className="no-feedback-text">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Link to="/add-feedback" className="add-feedback-btn">
          + Add Feedback
        </Link>
      </div>
    </div>
  );
}
