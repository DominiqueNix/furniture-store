import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllItems } from "./components/AllItems";
import { Admin } from "./components/Admin";
import { useEffect, useState } from "react";
import { OneItem } from "./components/OneItem";
import { Cart } from "./components/Cart";
import apiURL from "./utils/api";
import { CheckoutSucceess } from "./components/CheckoutSuccess";
import { Contact } from "./components/Contact";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [itemAddedToCart, setItemAddedToCart] = useState(false)
  const [totalPayment, setTotalPayment] = useState(0);

  const fetchItems = () => {
    fetch(`${apiURL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data)
      });
  };

  useEffect(() => {
    fetchItems();
  }, [successAlert]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing popularItems={items.slice(0,4)} setItemAddedToCart={setItemAddedToCart}/>} />
        <Route path="/items" element={<AllItems items={items} filteredItems={filteredItems} setFilteredItems={setFilteredItems} setItemAddedToCart={setItemAddedToCart} itemAddedToCart={itemAddedToCart}/>} />
        <Route
          path="/admin"
          element={
            <Admin
              items={items}
              successAlert={successAlert}
              setSuccessAlert={setSuccessAlert}
              errorAlert={errorAlert}
              setErrorAlert={setErrorAlert}
            />
          }
        />
        <Route path="/items/:itemId" element={<OneItem setItemAddedToCart={setItemAddedToCart} itemAddedToCart={itemAddedToCart}/>} />
        <Route path="/cart" element={<Cart setItemAddedToCart={setItemAddedToCart} itemAddedToCart={itemAddedToCart} totalPayment={totalPayment} setTotalPayment={setTotalPayment}/>}/>
        <Route path="/checkout-success" element={<CheckoutSucceess total={totalPayment}/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
