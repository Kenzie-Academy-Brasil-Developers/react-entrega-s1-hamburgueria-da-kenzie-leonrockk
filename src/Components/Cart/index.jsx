import CartProduct from "../CartProduct";
import "./style.css";

export default function Cart({ currentSale, setCurrentSale }) {
  return (
    <div className="cartProductsContainer">
      {currentSale.length < 1 ? (
        <div>
          <h4>Sua sacola está vazia</h4>
          <p>Adicione itens</p>
        </div>
      ) : (
        <CartProduct
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      )}
    </div>
  );
}
