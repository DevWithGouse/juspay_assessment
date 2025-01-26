import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap the dashboard-related routes with DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="ecommerce" element={<Dashboard />} />
          <Route path="orderlist" element={<Order />} />
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
