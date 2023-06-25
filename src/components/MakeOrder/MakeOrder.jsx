import { useParams } from "react-router-dom";
import { useProducts } from "../../context/productProvider";

const MakeOrder = () => {
  const {
    state: { products },
  } = useProducts();

  const { id } = useParams();

  console.log(id);
  console.log(products);

  const product = products.filter((prod) => prod.id === id);

  console.log(products.filter((prod) => prod.id === id));

  return <div className="container my-5">MakeOrder</div>;
};

export default MakeOrder;
