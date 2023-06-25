import { useState } from "react";
import { useProducts } from "../../context/productProvider";

const AllOrders = () => {
  const {
    state: { orders },
  } = useProducts();
  const [page, setPage] = useState(1);

  const numberOfElementPerPage = 3;

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(orders?.length / numberOfElementPerPage)
    )
      setPage(selectedPage);
  };

  return (
    <div className="container my-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Delivery</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .slice(
              page * numberOfElementPerPage - numberOfElementPerPage,
              page * numberOfElementPerPage
            )
            ?.map((order, i) => (
              <tr key={i}>
                <td>{order.customerName}</td>
                <td>{order.productName}</td>
                <td>{order.price}</td>
                <td>{order.deliveryOption}</td>
                <td>{order.customerAddress}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <span
              className="page-link"
              onClick={() => selectPageHandler(page - 1)}
            >
              Previous
            </span>
          </li>
          {[...Array(Math.ceil(orders?.length / numberOfElementPerPage))]?.map(
            (_, i) => {
              return (
                <li key={i} className="page-item">
                  <span
                    onClick={() => selectPageHandler(i + 1)}
                    className="page-link"
                  >
                    {i + 1}
                  </span>
                </li>
              );
            }
          )}

          <li className="page-item">
            <span
              className="page-link"
              onClick={() => selectPageHandler(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllOrders;
