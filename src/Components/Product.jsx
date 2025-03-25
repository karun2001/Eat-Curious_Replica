import "./Product.css";

export default function Product({ image, title, handleClick }) {
  return (
    <div>
      <img src={image} title={title} />
      <button
        onClick={() => {
          handleClick(title);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
