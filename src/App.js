import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Store from './pages/Store';
import React,{ useState } from 'react';
import Signin from "./pages/Admin/signin/singin";
import Register from "./pages/Admin/register/register";


function App() {
  const [isSignedIn, setIsSignedIn] = useState(()=> {
      const userLogged = sessionStorage.getItem("access_token");
      return userLogged || false
  });
  return (
   <BrowserRouter>
    
    
   <Routes>
      <Route path='/' element={<Home /> }></Route>
      <Route path='/About' element={<About /> }></Route>
      <Route path='/Products' element={<Products /> }></Route>
      <Route path='/Store' element={<Store />}></Route>
      <Route path= '/signin' element={<Signin />} />
      <Route path='/register' element={<Register />} />
   </Routes>
   

   </BrowserRouter>
 
   
    
  );
}

export default App;
