import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import Cart from "./Components/Cart";
import CartTotal from "./Components/CartTotal";

function App() {
  const [api, setApi] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [results, setResults] = useState("false");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setApi(res);
        setProducts(res);
      });
  }, []);

  return (
    <div className="App">
      <Header
        logo={logo}
        products={products}
        setProducts={setProducts}
        api={api}
        setResults={setResults}
        search={search}
        setSearch={setSearch}
      />
      {results === "true" ? <h4>Resultados para: {search}</h4> : <h4></h4>}
      <main className="mainContainer">
        <ProductsList
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
        <div className="cartContainer">
          <div className="cartTitle">
            <h3>Carrinho de compras</h3>
          </div>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          <div className="lineBreak"></div>
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
