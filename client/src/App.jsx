import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuggestionBoard from "./pages/SuggestionBoard";
import FeedbackForm from "./components/FeedbackForm";
import NoFeedback from "./pages/NoFeedback";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuggestionBoard />} />
        <Route path="/add-feedback" element={<FeedbackForm />} />
        <Route path="/no-feedback" element={<NoFeedback />} />
      </Routes>
    </Router>
  );
}
