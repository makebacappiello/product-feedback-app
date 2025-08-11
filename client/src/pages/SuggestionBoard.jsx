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
      <aside className="sidebar">
        <div className="logo-box">
          <h2>My Company</h2>
          <p>Feedback Board</p>
        </div>
        <div className="category-buttons">
          {["All", "UI", "UX", "Feature", "Enhancement", "Bug"].map((cat) => (
            <button
              key={cat}
              className={`category-button ${
                categoryFilter === cat ? "active" : ""
              }`}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
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
      </main>
    </div>
  );
}
