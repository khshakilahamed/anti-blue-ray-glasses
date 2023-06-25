import { useProducts } from "../../context/productProvider";

const RegularOrders = () => {
  const {
    state: { orders },
  } = useProducts();
  return (
    <div className="container my-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Delivery</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.deliveryOption === "Regular Deliver")
            .map((order, i) => (
              <tr key={i}>
                <td>{order.customerName}</td>
                <td className="d-flex align-items-center gap-3">
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={order.image}
                    alt=""
                  />
                  <span>{order.productName}</span>
                </td>
                <td>{order.price}</td>
                <td>{order.deliveryOption}</td>
                <td>{order.customerAddress}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegularOrders;
