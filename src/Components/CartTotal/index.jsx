import "./style.css";

export default function CartTotal({ currentSale }) {
  const finalPrice = currentSale.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);
  return (
    <div className="cartTotal">
      <h5>Total</h5>
      <h5>R${finalPrice.toFixed(2).replace(".", ",")}</h5>
    </div>
  );
}
