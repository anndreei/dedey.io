import React from "react";
import {
  createBrowserRouter,
  Router,
  Outlet,
  RouterProvider
} from "react-router-dom"

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./style.scss"



const Layout = () => {
  return (
      <>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </>        
    );
}

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])

function App() {
  return <div className="app">
    <div className="container">
      <RouterProvider router = {router} />
    </div>
  </div>;
}

export default App;
