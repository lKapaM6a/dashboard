import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {CustomersPage} from "./pages/customers";
import {HelpPage} from "./pages/help";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomersPage/>}/>
        <Route path="/customers" element={<CustomersPage/>}/>
        <Route path="/dashboard" element={<CustomersPage/>}/>
        <Route path="/help" element={<HelpPage/>}/>
      </Routes>
    </Router>
  );
}
