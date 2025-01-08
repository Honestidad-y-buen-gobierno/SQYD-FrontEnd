
import { useNavigate } from "react-router-dom"; // Importa el hook
import "../assets/styles/Home.css";

function Home() {

const navigate = useNavigate(); // Inicializa el hook de navegación

const handleRedirect = () => {
    navigate("/denuncia"); // Redirige a la página de home
}

    return (
        <div className="app-container">
        <main className="main-content">
            <section className="home-section">
                <div className="home-section-content">
                    <h3 className="home-title">
                    Reporta  actos de corrupción o malas conductas de funcionarios públicos  o particulares relacionados con actividades del gobierno. 
                    El servicio es gratuito y completamente confidencial.
                    </h3>

                    <div className="home-button-container">
                        <button className="home-button" onClick={handleRedirect}>
                            Iniciar Denuncia
                        </button>
                    </div>
                </div>
            </section>
        </main>
    </div >
    )
}

export default Home;