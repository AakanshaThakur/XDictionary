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
    const found = dictionary.find(
      (entry) =>
        entry.word.toLocaleLowerCase() === searchTerm.trim().toLowerCase()
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

      {definition && (
        <div style={{ marginTop: "1rem" }}>
          {definition === "Word not found in the dictionary." ? (
            <p>{definition}</p>
          ) : (
            <>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
