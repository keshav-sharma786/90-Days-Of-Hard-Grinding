// src/components/SearchMedicines.jsx
import React, { useState } from "react";
import medList from "../utils/mockData";

const SearchMedicines = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const queryWords = value.toLowerCase().split(" "); // split into words

    // Free-form search using includes() for each word
    const filtered = medList.filter((med) => {
      return queryWords.some((word) => {
        const nameMatch = med.name?.toLowerCase().includes(word);
        const genericMatch = med.generic?.toLowerCase().includes(word);
        const diseaseMatch = med.disease_tags
          ? med.disease_tags.some((tag) => tag.toLowerCase().includes(word))
          : false;

        return nameMatch || genericMatch || diseaseMatch;
      });
    });

    setResults(filtered);
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#1a002b",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "0 0 15px rgba(255, 0, 255, 0.7)",
        }}
      >
        🔍 Search Medicines
      </h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="Type anything like 'I have fever' or medicine name..."
          value={query}
          onChange={handleSearch}
          style={{
            width: "70%",
            padding: "15px 20px",
            fontSize: "18px",
            borderRadius: "12px",
            border: "2px solid #9a4fff",
            outline: "none",
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {results.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {results.map((med, index) => (
            <div
              key={index}
              style={{
                width: "70%",
                backgroundColor: "#3d0f5f",
                color: "#fff",
                borderRadius: "20px",
                padding: "25px 30px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.7)";
              }}
            >
              <h2
                style={{
                  marginBottom: "10px",
                  color: "#ffb3ff",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  textShadow: "0 0 10px rgba(255,255,255,0.3)",
                }}
              >
                {med.name || "N/A"}
              </h2>
              <p>
                <strong>Generic:</strong> {med.generic || "N/A"}
              </p>
              <p>
                <strong>Diseases:</strong>{" "}
                {med.disease_tags ? med.disease_tags.join(", ") : "N/A"}
              </p>
              <p>
                <strong>Price:</strong> {med.price_in_inr || "N/A"}
              </p>
              <p>
                <strong>Description:</strong> {med.description || "N/A"}
              </p>
              <p>
                <strong>Alternatives:</strong>{" "}
                {med.alternatives ? med.alternatives.join(", ") : "N/A"}
              </p>
              <p>
                <strong>Advantages:</strong>{" "}
                {med.advantages ? med.advantages.join(", ") : "N/A"}
              </p>
              <p>
                <strong>Disadvantages:</strong>{" "}
                {med.disadvantages ? med.disadvantages.join(", ") : "N/A"}
              </p>
              {med.youtube && (
                <p>
                  <strong>YouTube:</strong>{" "}
                  <a
                    href={med.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffb3ff", textDecoration: "underline" }}
                  >
                    Watch
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      ) : query ? (
        <p
          style={{
            color: "#ffb3ff",
            textAlign: "center",
            marginTop: "50px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          No medicines found for "{query}"
        </p>
      ) : null}
    </div>
  );
};

export default SearchMedicines;
