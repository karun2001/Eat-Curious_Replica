import { useRef } from "react";
import "./Header.css";
import CartModal from "./CartModal";

export default function Header({ cartItems }) {
  const ref = useRef();

  return (
    <section id="section-heading">
      <CartModal title="Your Cart" ref={ref} cartItems={cartItems} />
      <div id="heading">
        <button
          onClick={() => {
            ref.current.open();
          }}
        >
          Cart ({cartItems.length})
        </button>
      </div>
      <h2>EAT CURIOUS PRODUCTS</h2>
      <p>
        Eat Curious is here to revolutionise your kitchens! Ideal for
        foodservice, our innovative range of ingredients and finished solutions
        are packed with clean ingredients and made without the use of isolates.
        This means that they don’t just taste good, they’re also better for the
        planet! Whether you’re using Eat Curious Dehydrated Mince as part of a
        plant-based lasagna, or serving our Three Bean Chilli Hot Fill Solution
        over a jacket potato, making a positive impact on the planet has never
        been easier!
      </p>
    </section>
  );
}
