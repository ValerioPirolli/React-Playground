import Product from "./product";
import { useamzStore } from "../stores/amzStore";

export const AmzBox = () => {
  const { cart, emptyCart } = useamzStore();
  const products = [
    { name: "cuffie", price: 10 },
    { name: "casse", price: 20 },
    { name: "televisore", price: 50 },
    { name: "computer", price: 220 },
  ];

  const cartProducts = products.filter((product) =>
    cart.some(
      (item) => item.name === product.name && item.price === product.price
    )
  );

  const storeProducts = products.filter(
    (product) =>
      !cart.some(
        (item) => item.name === product.name && item.price === product.price
      )
  );

  return (
    <>
      <div className="box window">
        <h2>Carrello</h2>
        <button className="btn" onClick={emptyCart}>
          Svuota Carrello
        </button>
        {cartProducts.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <div className="box window">
        <h2>Store</h2>
        {storeProducts.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};
