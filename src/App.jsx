import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Denuncia from "./pages/Denuncia";
import Topic from "./pages/Topic"; 
import Home from "./pages/Home";
import Seguimiento from "./pages/Seguimiento";
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
          <Route path="/seguimiento" element={<Seguimiento/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
