import React from "react";
import "../App.css";

export default function SuggestionCardList({ feedbackData }) {
  if (feedbackData.length === 0) {
    return <p>No feedback suggestions yet.</p>;
  }

  return (
    <ul className="suggestion-list">
      {feedbackData.map((item) => (
        <li key={item.id} className="suggestion-card">
          <div className="suggestion-content">
            <h3 className="suggestion-title">{item.title}</h3>
            <p className="suggestion-description">{item.description}</p>
            <span className={`tag tag-${item.category.toLowerCase()}`}>
              {item.category}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
