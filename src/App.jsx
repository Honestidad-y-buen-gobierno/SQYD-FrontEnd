import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Denuncia from "./pages/Denuncia";
import Topic from "./pages/Topic";
import Home from "./pages/Home";
import ViewForm from "./pages/ViewForm";
import Seguimiento from "./pages/Seguimiento";
import Descripcion from "./pages/FormNavigator";
import Login from "./pages/Login";
import Summary from "./pages/Summary"; 
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/denuncia" element={<Denuncia />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/form" element={<ViewForm />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
          <Route path="/descripcion" element={<Descripcion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} /> {/* Nueva ruta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
  