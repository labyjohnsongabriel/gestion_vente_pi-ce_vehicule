import { createBrowserRouter } from "react-router-dom"
import Navbar from "/src/Navbar/Navbar";
import Dashboard from "/src/Page/Dashboard/Dashboard"
import Sidebar from "/src/Slidebar/Slidebar"


import React from "react"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Menu",
    element: <Navbar />,
  },
  {
    path: "/Slidebar",
    element
    : <Sidebar />,
  }
]);

export default router;



/*
import { createBrowserRouter } from "react-router-dom";
import React from "react";

import Navbar from "/src/Navbar/Navbar";
import Dashboard from "/src/Page/Dashboard/Dashboard";
import Slidebar from "/src/Slidebar/Slidebar";


const Layout = ({ children }) => (
  <div>
    <div className="">
      <Slidebar />
      <main className="flex-grow-1 p-3">{children}</main>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/Menu",
    element: (
      <Layout>
        <Navbar />
      </Layout>
    ),
  },
  {
    path: "/Slidebar",
    element: (
      <Layout>
        <Slidebar />
      </Layout>
    ),
  },
]);

export default router;
*
*/
