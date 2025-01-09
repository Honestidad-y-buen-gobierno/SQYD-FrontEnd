import React, { useState } from "react";
import "../assets/styles/Form.css";

function Form({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(1); // Estado para manejar el paso actual
  const [isAnonimo, setIsAnonimo] = useState(false); // Estado para "¿Es una denuncia anónima?"
  const [denunciante, setDenunciante] = useState(""); // Estado para "Denunciante"
  const [requiereProteccion, setRequiereProteccion] = useState(false); // Estado para "¿Requiere medidas de protección?"

  const [formData, setFormData] = useState({
    fecha: "",
    dependencia: "",
    tramite: "",
    municipio: "",
    descripcion: "",
    email: "",
    adscripcion: "",
    curp: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    sexo: "",
    edad: "",
    escolaridad: "",
    ocupacion: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnonimoChange = () => setIsAnonimo(!isAnonimo);
  const handleDenuncianteChange = (e) => setDenunciante(e.target.value);
  const handleProteccionChange = () => setRequiereProteccion(!requiereProteccion);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1); // Avanzar al siguiente paso
    } else {
      onSubmit(formData); // Enviar todos los datos si es el último paso
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1); // Retroceder al paso anterior
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: 
        return (
          <>
            <div className="form-pair">
  <div className="form-group">
    <label htmlFor="fecha">Fecha de los hechos</label>
    <input
      type="date"
      id="fecha"
      name="fecha"
      value={formData.fecha}
      onChange={handleChange}
      className="form-control"
    />
  </div>
  <div className="form-group">
    <label htmlFor="dependencia">Dependencia de los hechos</label>
    <select
      id="dependencia"
      name="dependencia"
      value={formData.dependencia}
      onChange={handleChange}
      className="form-control"
    >
      <option value="" disabled>
        Seleccione una opción
      </option>
      <option value="dependencia1">Dependencia 1</option>
      <option value="dependencia2">Dependencia 2</option>
    </select>
  </div>
</div>

            <div className="form-group" style={{ gridColumn: "span 2" }}>
              <label htmlFor="tramite">Trámite o servicio (opcional)</label>
              <input
                type="text"
                id="tramite"
                name="tramite"
                value={formData.tramite}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group" style={{ gridColumn: "span 2" }}>
              <label htmlFor="municipio">Municipio</label>
              <select
                id="municipio"
                name="municipio"
                value={formData.municipio}
                onChange={handleChange}
                className="form-control"
              >
                <option value="" disabled>
                  Seleccione un municipio
                </option>
                <option value="municipio1">Municipio 1</option>
                <option value="municipio2">Municipio 2</option>
              </select>
            </div>
          </>
        );
      case 2: // Sección de descripción
        return (
          <>
            <div className="form-group" style={{ gridColumn: "span 2" }}>
              <label htmlFor="descripcion">Descripción de los hechos</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className="form-control"
                placeholder="Describe aquí..."
              />
            </div>
          </>
        );
      case 3: // Sección de contacto
        return (
          <>
            {/* Denuncia anónima */}
            <div className="checkbox-group">
              <label>¿Es una denuncia anónima?</label>
              <input
                type="checkbox"
                name="anonimo"
                onChange={handleAnonimoChange}
                checked={isAnonimo}
              />
            </div>

            {isAnonimo ? (
              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Ingresa tu correo electrónico"
                />
              </div>
            ) : (
              <>
                {/* Denunciante */}
                <div className="form-group">
                  <label>Denunciante:</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="denunciante"
                        value="particular"
                        onChange={handleDenuncianteChange}
                        checked={denunciante === "particular"}
                      />
                      Particular
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="denunciante"
                        value="servidor_publico"
                        onChange={handleDenuncianteChange}
                        checked={denunciante === "servidor_publico"}
                      />
                      Servidor Público
                    </label>
                  </div>
                </div>

                {/* Opciones para servidor público */}
                {denunciante === "servidor_publico" && (
                  <>
                    <div className="checkbox-group">
                      <label>¿Requiere medidas de protección?</label>
                      <input
                        type="checkbox"
                        name="requiereProteccion"
                        onChange={handleProteccionChange}
                        checked={requiereProteccion}
                      />
                    </div>

                    {requiereProteccion && (
                      <>
                        <div className="form-group">
                          <label htmlFor="dependencia">Dependencia</label>
                          <select
                            id="dependencia"
                            name="dependencia"
                            value={formData.dependencia}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="">Selecciona tu dependencia</option>
                            <option value="dependencia1">Dependencia 1</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="adscripcion">Área de adscripción</label>
                          <select
                            id="adscripcion"
                            name="adscripcion"
                            value={formData.adscripcion}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="">Selecciona tu área</option>
                            <option value="adscripcion1">Área 1</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="curp">CURP</label>
                          <input
                            type="text"
                            id="curp"
                            name="curp"
                            value={formData.curp}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingresa tu CURP"
                          />
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* Campos comunes */}
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="primerApellido">Primer apellido</label>
                  <input
                    type="text"
                    id="primerApellido"
                    name="primerApellido"
                    value={formData.primerApellido}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ingresa tu primer apellido"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="segundoApellido">Segundo apellido</label>
                  <input
                    type="text"
                    id="segundoApellido"
                    name="segundoApellido"
                    value={formData.segundoApellido}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ingresa tu segundo apellido"
                  />
                </div>

                {/* Sexo */}
                <div className="form-group">
  <label>Sexo:</label>
  <div className="radio-group">
    <label className="radio-label">
      <input
        type="radio"
        name="sexo"
        value="hombre"
        onChange={handleChange}
        checked={formData.sexo === "hombre"}
      />
      <span>Hombre</span>
    </label>
    <label className="radio-label">
      <input
        type="radio"
        name="sexo"
        value="mujer"
        onChange={handleChange}
        checked={formData.sexo === "mujer"}
      />
      <span>Mujer</span>
    </label>
    <label className="radio-label">
      <input
        type="radio"
        name="sexo"
        value="otro"
        onChange={handleChange}
        checked={formData.sexo === "otro"}
      />
      <span>Otro</span>
    </label>
  </div>
</div>


                {/* Campos de media anchura */}
                <div className="form-pair">
  <div className="form-group">
    <label htmlFor="edad">Edad</label>
    <input
      type="number"
      id="edad"
      name="edad"
      value={formData.edad}
      onChange={handleChange}
      className="form-control"
      placeholder="Ingresa tu edad"
    />
  </div>
  <div className="form-group">
    <label htmlFor="escolaridad">Escolaridad</label>
    <select
      id="escolaridad"
      name="escolaridad"
      value={formData.escolaridad}
      onChange={handleChange}
      className="form-control"
    >
      <option value="">Selecciona tu escolaridad</option>
      <option value="primaria">Primaria</option>
      <option value="secundaria">Secundaria</option>
      <option value="preparatoria">Preparatoria</option>
      <option value="universidad">Universidad</option>
    </select>
  </div>
</div>



<div className="form-pair">
  <div className="form-group">
    <label htmlFor="ocupacion">Ocupación</label>
    <input
      type="text"
      id="ocupacion"
      name="ocupacion"
      value={formData.ocupacion}
      onChange={handleChange}
      className="form-control"
      placeholder="Ingresa tu ocupación"
    />
  </div>
  <div className="form-group">
    <label htmlFor="telefono">Número de Teléfono</label>
    <input
      type="tel"
      id="telefono"
      name="telefono"
      value={formData.telefono}
      onChange={handleChange}
      className="form-control"
      placeholder="Ingresa tu número de teléfono"
    />
  </div>
</div>




                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ingresa tu correo electrónico"
                  />
                </div>
              </>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={(e) => e.preventDefault()}>
        {renderStepContent()}
        <div className="form-buttons">
          {currentStep > 1 && (
            <button type="button" className="btn-back" onClick={handleBack}>
              Atrás
            </button>
          )}
          <button type="button" className="btn-next" onClick={handleNext}>
            {currentStep < 3 ? "Continuar" : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
