import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
//import Home from "./pages/Home";
import Denuncia from "./pages/Denuncia";
//import Seguimiento from "./pages/Seguimiento";
import "./assets/styles/App.css"; // Archivo de estilos globales

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/denuncia" element={<Denuncia />} />
            <Route path="/seguimiento" element={<Seguimiento />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;