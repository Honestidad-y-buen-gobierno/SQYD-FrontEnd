import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Denuncia from "./pages/Denuncia";
import Topic from "./pages/Topic"; 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Ruta para la página Denuncia */}
          <Route path="/" element={<Denuncia />} />
          {/* Ruta para la página Topic */}
          <Route path="/topic" element={<Topic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
