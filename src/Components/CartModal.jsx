import Cart from "./Cart.jsx";
import "./CartModal.css";
import { useRef, useImperativeHandle } from "react";

export default function CartModal({ title, ref, cartItems }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return (
    <dialog id="dialog" ref={dialogRef}>
      <h3>{title}</h3>
      <Cart cartItems={cartItems} />
    </dialog>
  );
}
