import { useEffect, useState } from "react";

function App() {
  const [cityData, setCityData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(function () {
    (async function () {
      const response = await fetch(`http://localhost:3000/cities`);
      const result = await response.json();

      setCityData(result);
    })();
  }, []);

  async function clickedGo() {
    const response = await fetch(
      `http://localhost:3000/cities/search?c=${searchTerm}`,
    );
    const result = await response.json();

    setCityData(result);
  }

  return (
    <>
      <input
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={clickedGo}>GO</button>
      <ul>
        {cityData.map((value) => (
          <li>{value.Name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
