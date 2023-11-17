
import { useamzStore } from "../stores/amzStore";

const Product = ({name, price }) => {
  const { cart, addToCart, removeFromCart } = useamzStore();

  const isProductInCart = cart.some(
    (item) => item.name === name && item.price === price
  );

  const handleButtonClick = () => {
    const product = {name, price };

    if (isProductInCart) {
      removeFromCart(product.name);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="prod">
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={handleButtonClick}>
        {isProductInCart ? "Rimuovi dal carrello" : "Aggiungi al carrello"}
      </button>
    </div>
  );
};

export default Product;
