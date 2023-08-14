import { createContext, useMemo, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => setCart((prev) => [...prev, data]);

  const removeToCart = () => {
    if (cart.length > 0) {
      setCart((prev) => prev.pop());
    }
  };

  console.log(cart);

  const values = { cart, addToCart, addToCart };
  return (
    <CartContext.Provider value={useMemo(() => values, [values])}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
