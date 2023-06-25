import { Button, Card } from "react-bootstrap";
import { useProducts } from "../../context/productProvider";
import { useState } from "react";
import OrderModal from "../OrderModal/OrderModal";

const ProductsCard = () => {
  const {
    state: { products, loading },
  } = useProducts();
  const [show, setShow] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleProduct = (prod) => {
    setSelectProduct(prod);
    handleShow();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-5">
      <div className="d-flex flex-wrap gap-4">
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>price: {product.price}</Card.Text>
              {/* <Link to={`makeOrder/${product.id}`}>
                <Button variant="primary">Make Order</Button>
              </Link> */}
              <Button variant="primary" onClick={() => handleProduct(product)}>
                Make Order
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {show && selectProduct && (
        <OrderModal
          show={show}
          handleClose={handleClose}
          selectProduct={selectProduct}
        />
      )}
    </div>
  );
};

export default ProductsCard;
