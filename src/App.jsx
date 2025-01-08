import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Denuncia from "./pages/Denuncia";
import Topic from "./pages/Topic"; 
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Ruta para la página Denuncia */}
          <Route path="/denuncia" element={<Denuncia />} />
          {/* Ruta para la página Topic */}
          <Route path="/topic" element={<Topic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
