import React from 'react';
import Home from './features/Pages/Home';
import LoginSlice from './features/auth/LoginSlice';
import './App.css';
import LoginPage from './features/Pages/LoginPage';
import SignupPage from './features/Pages/SignupPage';
import Login from './features/auth/Login';
import CartPage from './features/Pages/CartPage';
import ProductDetailPage from './features/Pages/ProduceDetailPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signin",
    element: <SignupPage />,
  },
  {
    path : "/cart",
    element : <CartPage />
  },
  {
    path : "/product-detail",
    element : <ProductDetailPage />
  }

]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
