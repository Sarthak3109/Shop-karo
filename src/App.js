import React from 'react';
import Home from './features/Pages/Home';
import LoginSlice from './features/auth/authSlice';
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
import Protected from './features/auth/Protected';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Home /></Protected> ,
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
    element : <Protected><CartPage /></Protected>
  },
  {
    path : "/product-detail/:id",
    element : <Protected><ProductDetailPage /></Protected>
  },
  {
    path : "*",
    element : <Login></Login>
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
