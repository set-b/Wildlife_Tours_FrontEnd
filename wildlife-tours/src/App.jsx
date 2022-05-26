import React, { useRef } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage/AboutPage";
import BookATour from "./pages/BookATour/BookATour";
import Contact from "./pages/Contact/Contact";
import Maintenance from "./pages/Maintenance/Maintenance";
import Navbar from "./Navbar/Navbar";
import "./App.css";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const bookRef = useRef();
  const contactRef = useRef();
  const refArray = [homeRef, aboutRef, bookRef, contactRef];
  // console.log(refArray);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  // wrap in divs, forward to navbar as props
  // page zoom to 125% on load, or MAKE EVERYTHING 25% LARGER
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        className="App"
        style={{
          backgroundColor: "default",
        }}
      >
        <Navbar refs={refArray} />
        <Router>
          <Routes>
            {/* maintenance will check jwt for employee or admin roles, element will be maintenance page */}
            <Route exact path="/maintenance" element={<Maintenance />} />
          </Routes>
        </Router>
        <div
          id="HomePage"
          ref={homeRef}
          style={{ position: "relative", top: "-20px" }}
        >
          <HomePage target="topOfPage" />
        </div>
        <div id="About" ref={aboutRef}>
          <About />
        </div>
        <div id="Book A Tour" ref={bookRef}>
          <BookATour />
        </div>
        <div id="Contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
