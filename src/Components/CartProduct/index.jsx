import "./style.css";
export default function CartProduct({ currentSale, setCurrentSale }) {
  function handleRemove(item) {
    const filtered = currentSale.filter((comidinha) => {
      return comidinha !== item;
    });
    setCurrentSale(filtered);
  }
  function handleAdd(item) {
    item.quantity++;
    setCurrentSale([...currentSale]);
  }
  function handleSubtract(item) {
    if (item.quantity > 1) {
      item.quantity--;
      setCurrentSale([...currentSale]);
    } else {
      handleRemove(item);
    }
  }
  return currentSale.map((product) => {
    return (
      <div className="cartProduct" key={product.id}>
        <div className="productCartImageContainer">
          <img src={product.img}></img>
        </div>
        <div className="globalProductCart">
          <div className="productCartInfoContainer">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
          </div>
          <div>
            <button
              className="removeButton"
              onClick={() => handleRemove(product)}
            >
              Remover
            </button>
            <div className="quantity">
              <button onClick={() => handleSubtract(product)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => handleAdd(product)}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
