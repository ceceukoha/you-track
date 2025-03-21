// import React from 'react'

// const page = () => {
//   return (
//     <div>
//      Add Jobs page
//     </div>
//   )
// }

// export default page

"use client";
import React, { useState } from "react";

const ResumeFeedback = () => {
  const [resumeText, setResumeText] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e) => setResumeText(e.target.value);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setResumeText(reader.result);
      reader.readAsText(file);
    }
  };

  const handleSubmit = async () => {
    if (!resumeText) {
      alert("Please provide your resume text or upload a file.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText }),
      });
      const data = await response.json();
      setFeedback(data.feedback);
    } catch (error) {
      console.error("Error generating feedback:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Resume Feedback</h1>
      <textarea
        value={resumeText}
        onChange={handleTextChange}
        placeholder="Paste your resume text here..."
        className="w-full h-40 border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleFileUpload} />
      <button
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
        onClick={handleSubmit}
      >
        {loading ? "Generating Feedback..." : "Get Feedback"}
      </button>
      {feedback && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-bold mb-2">Feedback:</h2>
          <ul className="list-disc ml-6">
            {feedback.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeFeedback;

