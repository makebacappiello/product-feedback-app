import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import SuggestionCardList from "../components/SuggestionCardList";
import NoFeedback from "./NoFeedback";

export default function SuggestionBoard() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const fetchFeedback = async () => {
    try {
      const response = await fetch("/api/get-all-suggestions");
      const data = await response.json();
      setFeedbackData(data);
    } catch (err) {
      console.error("Failed to fetch feedback:", err);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const filtered = feedbackData.filter((item) =>
    categoryFilter === "All" ? true : item.category === categoryFilter
  );

  return (
    <div className="board-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-box">
          <h2>My Company</h2>
          <p>Feedback Board</p>
        </div>
        <div className="category-buttons">
          {["All", "UI", "UX", "Feature", "Enhancement", "Bug"].map(
            (category) => (
              <button
                key={category}
                className={`category-button ${
                  categoryFilter === category ? "active" : ""
                }`}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {filtered.length === 0 ? (
          <NoFeedback />
        ) : (
          <>
            <div className="top-bar">
              <h3>
                💡 {filtered.length}{" "}
                {categoryFilter === "All"
                  ? "Suggestions"
                  : `${categoryFilter} Suggestions`}
              </h3>
              <Link to="/add-feedback" className="add-feedback-btn">
                + Add Feedback
              </Link>
            </div>

            <SuggestionCardList feedbackData={filtered} />
          </>
        )}
      </div>
    </div>
  );
}
