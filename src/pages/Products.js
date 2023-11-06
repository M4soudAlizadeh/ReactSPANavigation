import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>Products Url!</h1>
      <ul>
        <li>
          <Link to="/products/book">a book</Link>
        </li>
        <li>
          <Link to="/products/carpet">a Carpet</Link>
        </li>
        <li>
          <Link to="/products/phone">phone</Link>
        </li>
        <li>
          <Link to="/products/car">car</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
