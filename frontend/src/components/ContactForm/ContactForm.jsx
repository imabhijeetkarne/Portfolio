import { useState } from "react";

// Backend URL from environment variable
// const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Query submitted successfully!");
        setFormData({ name: "", email: "", query: "" });
      } else {
        const errorResponse = await response.json();
        alert(errorResponse.message || "Failed to submit query.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundColor: "#19376d",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Contact Us
        </h2>
        <label
          style={{
            display: "block",
            fontSize: "1.2rem",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.1rem",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label
          style={{
            display: "block",
            fontSize: "1.2rem",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.1rem",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label
          style={{
            display: "block",
            fontSize: "1.2rem",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          Query:
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.1rem",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              minHeight: "100px",
            }}
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: loading ? "#6c757d" : "#007bff",
            color: "white",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
