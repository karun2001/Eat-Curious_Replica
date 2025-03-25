import "./Cart.css";
export default function Cart({ cartItems }) {
  const items = cartItems.map((itemsObj) => {
    return (
      <article>
        <p id="item-name">{itemsObj.item}</p>
        <div id="editables">
          <button>-</button>
          <p id="quantity">{itemsObj.quantity}</p>
          <button>+</button>
        </div>
      </article>
    );
  });

  return (
    <div id="cart">
      {cartItems.length <= 0 ? <p>Add Items to Cart</p> : items}
    </div>
  );
}
