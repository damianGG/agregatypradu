"use client"

import { useState } from "react";

interface TestimonialCard1Props {
  name: string;
  review: string;
  designation: string;
}

// =================================================

export default function TestimonialCard1({ name, review, designation }: TestimonialCard1Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 100; // Liczba znaków wyświetlana początkowo

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedReview = isExpanded ? review : review.slice(0, previewLength) + (review.length > previewLength ? "..." : "");

  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <blockquote className="icon mb-0">
          <p>“{displayedReview}”</p>
          {review.length > previewLength && (
            <button className="btn btn-link p-0" onClick={toggleReadMore} style={{ marginTop: "-40px" }}>
              {isExpanded ? "Czytaj mniej" : "Czytaj więcej"}
            </button>
          )}
          <div className="blockquote-details">
            <div className="info p-0">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-0">{designation}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}