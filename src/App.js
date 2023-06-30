import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Tiger");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=oJOh06O3kaTa8Sv1FFynSmo0W7gbKD-yzgG6NirJs4A`
    )
      .then((res) => res.json())
      .then((data) => setFetchData(data.results));
  }, [query]);
// console.log(fetchData)
 
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  function getSearch(e) {
    e.preventDefault();
    setQuery(search);

    setSearch("");
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <h1>Geeks Gallery</h1>
        <form onSubmit={getSearch}>
          <input
            id="input"
            type="search"
            placeholder="Search Image Name..."
            aria-label="Search"
            value={search}
            onChange={updateSearch}
          />
          <button id="btn" className="" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container">
        {fetchData.map((item, key) => {
          return (
            <div
              className="pictures"
              key={key}
              style={{
                backgroundImage: `url(${item.urls.small})`,
                backgroundRepeat: "no-repeat",
                // height:`${item.height}`,
                height:"400px",
                width: `${item.width}`,
                margin:"20px",
                border:"1px sloid black",
                borderRadius:"6px",
                padding:"20px",
              }}
            >
             {console.log(item.height)}
             
              <h3 style={{color:"white",textAlign:"left"}}>{item.user.name}</h3>
              <h4 style={{color:"white",textAlign:"left"}}>{item.created_at}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
