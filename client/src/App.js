import logo from './logo.svg';
import './App.css';
import { Landing } from './components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllItems } from './components/AllItems';
import { Admin } from './components/Admin';

function App() {
  return (
    // <main>
    //   <Nav />
    //   <Landing />  
    // </main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/items" element={<AllItems />}/>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
