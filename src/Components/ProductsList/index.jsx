import ProductCard from "../ProductCard";
import "./style.css";

export default function ProductsList({
  products,
  currentSale,
  setCurrentSale,
}) {
  return (
    <div className="ProductsList">
      {/* <ul> */}
      <ProductCard
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      />
      {/* </ul> */}
    </div>
  );
}
