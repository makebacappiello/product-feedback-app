import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FeedbackForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("UI");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    category: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if each field is empty
    const newErrors = {
      title: title === "",
      description: description === "",
      category: category === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((value) => value === true);
    if (hasErrors) return;

    const newFeedback = {
      title,
      description,
      category,
      upvotes: 0,
      status: "suggestion",
    };

    try {
      const response = await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  if (submitted) {
    return (
      <div className="feedback-submitted">
        <h2>✅ Feedback submitted!</h2>
        <Link to="/">Go back to the suggestion board</Link>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <Link to="/" className="back-link">
          ← Go Back
        </Link>

        <h1 className="form-title">Create New Feedback</h1>

        <form onSubmit={handleSubmit} className="feedback-form">
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title">Feedback Title</label>
            <p>Add a short, descriptive headline</p>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) {
                  setErrors({
                    title: false,
                    description: errors.description,
                    category: errors.category,
                  });
                }
              }}
              className={errors.title ? "error" : ""}
            />
            {errors.title && (
              <span className="error-message">Cannot be empty</span>
            )}
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <p>Choose a category for your feedback</p>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                if (errors.category) {
                  setErrors({
                    title: errors.title,
                    description: errors.description,
                    category: false,
                  });
                }
              }}
              className={errors.category ? "error" : ""}
            >
              <option value="">Select category</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Feature">Feature</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
            {errors.category && (
              <span className="error-message">Cannot be empty</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Feedback Detail</label>
            <p>Include any specific comments on what should be improved</p>
            <textarea
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description) {
                  setErrors({
                    title: errors.title,
                    description: false,
                    category: errors.category,
                  });
                }
              }}
              className={errors.description ? "error" : ""}
            />
            {errors.description && (
              <span className="error-message">Cannot be empty</span>
            )}
          </div>

          {/* Buttons */}
          <div className="form-actions">
            <Link to="/" className="cancel-btn">
              Cancel
            </Link>
            <button type="submit" className="submit-btn">
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
