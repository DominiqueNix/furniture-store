import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllItems } from "./components/AllItems";
import { Admin } from "./components/Admin";
import { useEffect, useState } from "react";
import { OneItem } from "./components/OneItem";
import { Cart } from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [cartItemTotal, setCartItemTotal] = useState(0);

  const fetchItems = () => {
    fetch("http://localhost:8080/products")
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
        <Route path="/" element={<Landing />} />
        <Route path="/items" element={<AllItems cartItemTotal={cartItemTotal} setCartItemTotal={setCartItemTotal} items={items} filteredItems={filteredItems} setFilteredItems={setFilteredItems}/>} />
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
        <Route path="/items/:itemId" element={<OneItem setCartItemTotal={setCartItemTotal} />} />
        <Route path="/cart" element={<Cart setCartItemTotal={setCartItemTotal}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
