/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useProducts } from "../../context/productProvider";
import { actionTypes } from "../../context/actionTypes";

const OrderModal = ({ show, handleClose, selectProduct }) => {
  const { dispatch } = useProducts();
  const [deliveryOption, setDeliveryOption] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    field: "",
    message: "",
  });

  const { name, price, image } = selectProduct;

  const submitForm = (e) => {
    e.preventDefault();

    const orderInfo = {
      productName: name,
      price,
      image,
      deliveryOption,
      customerName,
      customerAddress,
    };

    if (!deliveryOption) {
      setError(true);
      setErrorMessage({
        field: "Delivery",
        message: "Select the Delivery Option",
      });
    }
    if (!customerName) {
      setError(true);
      setErrorMessage({
        field: "Name",
        message: "Select the Delivery Option",
      });
    }

    setError(false);

    dispatch({ type: actionTypes.MAKE_ORDER, payload: orderInfo });
    handleClose();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="d-flex align-items-center gap-3">
            <img
              style={{ width: "45px", height: "45px" }}
              src={selectProduct.image}
              alt=""
            />
            <Modal.Title>{selectProduct?.name}</Modal.Title>
          </div>
        </Modal.Header>
        <form className="p-3 d-flex flex-column gap-3" onSubmit={submitForm}>
          <div>
            <label htmlFor="deliveryOption">Select Delivery Option</label>
            <select
              className="border py-1 px-2 rounded"
              name=""
              id="deliveryOption"
              style={{
                width: "100%",
                background: "transparent",
                color: "black",
              }}
              onChange={(e) => setDeliveryOption(e.target.value)}
              required
            >
              <option value="">Select one</option>
              {selectProduct.shippingOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {error && errorMessage.field === "Delivery" && (
            <p className="text-danger">{errorMessage.message}</p>
          )}

          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border  py-1 px-2 rounded"
              style={{
                width: "100%",
                background: "transparent",
                color: "black",
              }}
              onBlur={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your name"
              required
            />
            {error && errorMessage.field === "Name" && (
              <p className="text-danger">{errorMessage.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              className="border  py-1 px-2 rounded"
              style={{
                width: "100%",
                background: "transparent",
                color: "black",
                resize: "false",
              }}
              onBlur={(e) => setCustomerAddress(e.target.value)}
              placeholder="Enter your address"
            ></textarea>
          </div>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <button>Confirm Order</button>
        </form>
      </Modal>
    </div>
  );
};

export default OrderModal;
