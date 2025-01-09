import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Denuncia from "./pages/Denuncia";
import Topic from "./pages/Topic";
import Home from "./pages/Home";
import ViewForm from "./pages/ViewForm"; 
import Seguimiento from "./pages/Seguimiento";
import Descripcion from "./pages/FormNavigator";

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
          {/* Ruta para la página Seguimiento */}
          <Route path="/seguimiento" element={<Seguimiento/>} />
          {/* Ruta para la página Descripcion */}
          <Route path="/descripcion" element={<Descripcion />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
