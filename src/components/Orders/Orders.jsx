import { Link, Outlet } from "react-router-dom";

export const Orders = () => {
  return (
    <div className="container my-5">
      <div className="d-flex gap-3">
        <Link to="/orders">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Tooltip on top"
          >
            All Orders
          </button>
        </Link>
        <Link to="/orders/express-delivery">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Tooltip on top"
          >
            Express Orders
          </button>
        </Link>
        <Link to="/orders/regular-delivery">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Tooltip on top"
          >
            Regular Orders
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
