"use client"

import { useState } from "react";

interface TestimonialCard1Props {
  name: string;
  review: string;
  designation: string;
  columnClasses?: string;
}

export default function TestimonialCard1({ name, review, designation }: TestimonialCard1Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 100;

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const displayedReview = isExpanded ? review : review.slice(0, previewLength) + (review.length > previewLength ? "..." : "");

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-blue-50">
      <div className="mb-4 text-blue-400 text-3xl">&ldquo;</div>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {displayedReview}
      </p>
      {review.length > previewLength && (
        <button
          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          onClick={toggleReadMore}
        >
          {isExpanded ? "Czytaj mniej" : "Czytaj więcej"}
        </button>
      )}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-800 text-sm">{name}</p>
        <p className="text-gray-500 text-xs">{designation}</p>
      </div>
    </div>
  );
}
