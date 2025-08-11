import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FeedbackForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("UI");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      <div style={{ padding: "2rem" }}>
        <h2>✅ Feedback submitted!</h2>
        <Link to="/">Go back to the suggestion board</Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}
    >
      <h2>Submit Feedback</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      >
        <option value="">Select category</option>
        <option value="UI">UI</option>
        <option value="UX">UX</option>
        <option value="Feature">Feature</option>
        <option value="Enhancement">Enhancement</option>
        <option value="Bug">Bug</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
