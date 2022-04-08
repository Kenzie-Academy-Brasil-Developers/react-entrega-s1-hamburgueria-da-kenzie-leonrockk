import "./style.css";
import { useState } from "react";

export default function Header({ logo, setProducts, api, setResults, search, setSearch }) {
  function filterSearch(param) {
    if (param === "") {
      setResults("false");
      setProducts([...api]);
    } else {
      setResults("true");
      const filtered = api.filter((item) => {
        return item.name.toLowerCase().includes(param.toLowerCase());
      });
      setProducts([...filtered]);
    }
  }
  return (
    <header className="App-header">
      <img src={logo}></img>
      <div className="searchContainer">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
            filterSearch(e.target.value);
          }}
          type={"search"}
          placeholder={"Digitar Pesquisa"}
        />
        <button onClick={() => filterSearch(search)}>Pesquisar</button>
      </div>
    </header>
  );
}
