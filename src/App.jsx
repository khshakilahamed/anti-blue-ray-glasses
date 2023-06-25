import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductProvider from "./context/productProvider";
import MakeOrder from "./components/MakeOrder/MakeOrder";
import NavBar from "./components/Navbar/Navbar";
import { Orders } from "./components/Orders/Orders";
import AllOrders from "./components/Orders/AllOrders";
import ExpressOrders from "./components/Orders/ExpressOrders";
import RegularOrders from "./components/Orders/RegularOrders";

function App() {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/makeOrder/:id" element={<MakeOrder />}></Route>
            <Route path="/orders" element={<Orders />}>
              <Route index element={<AllOrders />} />
              <Route
                path="/orders/express-delivery"
                element={<ExpressOrders />}
              />
              <Route
                path="/orders/regular-delivery"
                element={<RegularOrders />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  );
}

export default App;
