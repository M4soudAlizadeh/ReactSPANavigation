import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  return (
    <section>
      <h1>{`Product Details product ${params.productId}`}</h1>
      <p>{params.productId}</p>
    </section>
  );
};
export default ProductDetails;
