import logo from './logo.svg';
import './App.css';
import { Landing } from './components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllItems } from './components/AllItems';
import { Admin } from './components/Admin';
import { useEffect, useState } from 'react';
import { OneItem } from './components/OneItem';

function App() {

  const [items, setItems] = useState([]);

  const fetchItems = () => {
      fetch("http://localhost:8080/products")
        .then(res => res.json())
        .then(data =>{ 
          console.log(data)
          setItems(data)
          })
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/items" element={<AllItems  items={items}/>}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/items/:itemId" element={<OneItem />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
