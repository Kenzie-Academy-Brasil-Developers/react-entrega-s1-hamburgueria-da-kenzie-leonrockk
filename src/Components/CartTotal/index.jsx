import "./style.css";

export default function CartTotal({ currentSale, setCurrentSale }) {
  function removeAll() {
    setCurrentSale([]);
  }
  const finalPrice = currentSale.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);
  return (
    <div className="cartTotalContainer">
      <div className="cartTotal">
        <h5>Total</h5>
        <h5>R${finalPrice.toFixed(2).replace(".", ",")}</h5>
      </div>
      {currentSale.length > 0 ? (
        <button onClick={removeAll}>Remover todos</button>
      ) : null}
    </div>
  );
}
