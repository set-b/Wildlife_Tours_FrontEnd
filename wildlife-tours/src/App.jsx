import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage/AboutPage";
import BookATour from "./pages/BookATour/BookATour";
import Contact from "./pages/Contact/Contact";
import Maintenance from "./pages/Maintenance/Maintenance";
import Navbar from "./Navbar/Navbar";
import "./App.css";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div
        className="App"
        style={{
          backgroundColor: "default",
        }}
      >
        <Navbar />
        <Router>
          <Routes>
            {/* maintenance will check jwt for employee or admin roles, element will be maintenance page */}
            <Route exact path="/maintenance" element={<Maintenance />} />
          </Routes>
        </Router>
        <HomePage id="Home" />
        <About id="About" />
        <BookATour id="Book A Tour" />
        <Contact id="Contact" />
      </div>
    </ThemeProvider>
  );
}

export default App;
