import { useState } from "react";

function App() {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm === "") {
      setDefinition("Word not found in the dictionary.");
      return;
    }

    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === trimmedTerm.toLowerCase()
    );

    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for a word..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h3 style={{ marginTop: "1rem" }}>Definition:</h3>

      {definition && (
        <div style={{ marginTop: "1rem" }}>
          <p>{definition}</p>
        </div>
      )}
    </div>
  );
}

export default App;
