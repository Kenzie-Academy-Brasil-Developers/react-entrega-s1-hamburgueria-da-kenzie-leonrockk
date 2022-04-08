import "./style.css";

export default function ProductCard({ products, currentSale, setCurrentSale }) {
  function addToCart(item) {
    if (!currentSale.includes(item)) {
      item.quantity = 1;
      setCurrentSale([...currentSale, item]);
    } else {
      item.quantity++;
      setCurrentSale([...currentSale]);
    }
  }
  return products.map((product) => {
    return (
      <div className="productCard" key={product.id}>
        <div className="productImageContainer">
          <img src={product.img}></img>
        </div>
        <div className="productInfoContainer">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <span>R${product.price.toFixed(2)}</span>
          <button onClick={() => addToCart(product)}>Adicionar</button>
        </div>
      </div>
    );
  });
}
