import logo from './logo.svg';
import './App.css';
import { Landing } from './components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllItems } from './components/AllItems';
import { Admin } from './components/Admin';
import { useAuth0 } from '@auth0/auth0-react';
import { TestAuth } from './components/TestAuth';

function App() {

  const {isLoading, error, isAuthenticated, user, getAccessTokenSilently, loginWithRedirect, logout} = useAuth0();

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
        <Route path="/test-auth" element={<TestAuth />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
