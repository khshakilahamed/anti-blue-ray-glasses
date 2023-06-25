import { useProducts } from "../../context/productProvider";

const ExpressOrders = () => {
  const {
    state: { orders },
  } = useProducts();
  return (
    <div className="container my-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Delivery</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.deliveryOption === "Express Delivery")
            .map((order, i) => (
              <tr key={i}>
                <th scope="row">{i}</th>
                <td>{order.customerName}</td>
                <td>{order.productName}</td>
                <td>{order.price}</td>
                <td>{order.deliveryOption}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpressOrders;
