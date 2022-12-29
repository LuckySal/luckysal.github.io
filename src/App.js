import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import ErrorPage from "./components/ErrorPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  function renderPage() {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About Me":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      default:
        return <ErrorPage />;
    }
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className="container">{renderPage()}</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
