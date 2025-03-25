import "./Products.css";
import PRODUCTS_LIST from "../PRODUCTS_LIST";
import Product from "./Product";

export default function Products({ handleClick }) {
  console.log(PRODUCTS_LIST);

  return (
    <>
      <div className="line"></div>
      <section>
        <menu>
          <ul id="products-menu">
            <li key="1">ALL PRODUCTS</li>
            <li key="2">Dehydrated Ingredients</li>
            <li key="3">Finished Solutions</li>
            <li key="4">Frozen Ingredients</li>
            <li key="5">Powered by Eat Curious</li>
          </ul>
        </menu>
      </section>
      <section>
        <div className="products">
          {PRODUCTS_LIST.map((object) => {
            return (
              <Product
                image={object.image}
                title={object.title}
                handleClick={handleClick}
                key={object.title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
