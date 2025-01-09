import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Denuncia from "./pages/Denuncia";
import Topic from "./pages/Topic";
import Home from "./pages/Home";
import ViewForm from "./pages/ViewForm"; // Importa la nueva vista

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Ruta para la página Home */}
          <Route path="/" element={<Home />} />
          {/* Ruta para la página Denuncia */}
          <Route path="/denuncia" element={<Denuncia />} />
          {/* Ruta para la página Topic */}
          <Route path="/topic" element={<Topic />} />
          {/* Nueva ruta para la vista del formulario */}
          <Route path="/form" element={<ViewForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
