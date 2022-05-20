import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage/AboutPage";
import BookATour from "./pages/BookATour/BookATour";
import Contact from "./pages/Contact/Contact";
import Maintenance from "./pages/Maintenance/Maintenance";
import Navbar from "./Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* add a nav bar for scrolling */}
      <Navbar />
      <Router>
        <Routes>
          {/* maintenance will check jwt for employee or admin roles, element will be maintenance page */}
          <Route exact path="/maintenance" element={<Maintenance />} />
        </Routes>
      </Router>
      <HomePage />
      <About />
      <BookATour />
      <Contact />
    </div>
  );
}

export default App;
