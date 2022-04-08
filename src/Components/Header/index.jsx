import "./style.css";
import { useState } from "react";

export default function Header({
  logo,
  setProducts,
  api,
  setResults,
  search,
  setSearch,
}) {
  function filterSearch(param) {
    const lowerCaseParam = param.toLowerCase();

    if (param === "") {
      setResults("false");
      setProducts([...api]);
    } else {
      setResults("true");

      const filtered = api.filter((item) => {
        const nameFilter = item.name.toLowerCase();
        const categoryFilter = item.category.toLowerCase();

        if (nameFilter.includes(lowerCaseParam)) {
          return nameFilter.includes(lowerCaseParam);
        }
        if (categoryFilter.includes(lowerCaseParam)) {
          return categoryFilter.includes(lowerCaseParam);
        }
      });

      setProducts([...filtered]);
    }
  }
  return (
    <header className="App-header">
      <img src={logo}></img>
      <div className="searchContainer">
        <form>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
              filterSearch(e.target.value);
            }}
            type={"search"}
            placeholder={"Digitar Pesquisa"}
          />
          <button onClick={() => filterSearch(search)}>Pesquisar</button>
        </form>
      </div>
    </header>
  );
}
