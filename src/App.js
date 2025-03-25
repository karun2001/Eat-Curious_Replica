import "./styles.css";
import Header from "./Components/Header";
import { useState } from "react";

import Products from "./Components/Products";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleClick(item) {
    setCartItems((prevCartItems) => {
      let newItem = item.toLowerCase();
      console.log(newItem);
      return [
        ...prevCartItems,
        {
          item: newItem,
          quantity: 1,
        },
      ];
    });
    console.log(cartItems);
  }

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Products handleClick={handleClick} />
    </div>
  );
}
