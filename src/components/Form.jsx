import React, { useState } from "react";
import Select from "react-select"; // Importar react-select
import municipiosData from "../assets/json/municipios.json";
import dependenciasData from "../assets/json/dependencias.json";
import "../assets/styles/Form.css";

function Form({ currentStep, handleNext, handleBack, onSubmit }) {
  const [isAnonimo, setIsAnonimo] = useState(false);
  const [denunciante, setDenunciante] = useState("particular");
  const [requiereProteccion, setRequiereProteccion] = useState(false);
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
  const [validationErrors, setValidationErrors] = useState([]);
  const [validationError, setValidationError] = useState("");

  // Opciones para los Select
  const municipiosOptions = municipiosData.Municipios.map((municipio) => ({
    value: municipio,
    label: municipio,
  }));

  const dependenciasOptions = dependenciasData.Dependencias.map((dependencia) =>
    dependencia.name
      ? { value: "", label: dependencia.name, isDisabled: true } // Grupos no seleccionables
      : { value: dependencia, label: dependencia }
  );

  const escolaridadOptions = [
    { value: "primaria", label: "Primaria" },
    { value: "secundaria", label: "Secundaria" },
    { value: "preparatoria", label: "Preparatoria" },
    { value: "universidad", label: "Universidad" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target || {};
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : "",
    });
  };

  const handleAnonimoChange = () => setIsAnonimo(!isAnonimo);

  const handleDenuncianteChange = (e) => {
    const value = e.target.value;
    setDenunciante(value);
    if (value !== "servidor_publico") {
      setRequiereProteccion(false);
      setFormData({
        ...formData,
        dependencia: "",
        adscripcion: "",
        curp: "",
      });
    }
  };

  const handleProteccionChange = () => setRequiereProteccion(!requiereProteccion);

  const validateStep = () => {
    const requiredFields = {
      1: ["fecha", "dependencia", "municipio"],
      2: ["descripcion"],
      3: isAnonimo
        ? ["email"]
        : [
            "nombre",
            "primerApellido",
            "sexo",
            "edad",
            "escolaridad",
            "ocupacion",
            "telefono",
            ...(denunciante === "servidor_publico" && requiereProteccion
              ? ["dependencia", "adscripcion", "curp"]
              : []),
          ],
    };

    const currentRequiredFields = requiredFields[currentStep] || [];
    const emptyFields = currentRequiredFields.filter(
      (field) => !formData[field]?.trim()
    );

    if (emptyFields.length > 0) {
      setValidationError("Por favor, completa todos los campos obligatorios.");
      setValidationErrors(emptyFields);
      return false;
    }

    setValidationError("");
    setValidationErrors([]);
    return true;
  };

  const handleNextClick = () => {
    if (validateStep()) {
      handleNext();
    }
  };
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step">
           <div className="form-group">
  <label htmlFor="fecha">Fecha de los hechos</label>
  <input
    type="date"
    id="fecha"
    name="fecha"
    value={formData.fecha}
    onChange={handleChange}
    max={new Date().toISOString().split("T")[0]} 
    className={`form-control ${
      validationErrors.includes("fecha") ? "is-invalid" : ""
    }`}
  />
</div>

            <div className="form-group">
              <label htmlFor="dependencia">Dependencia de los hechos</label>
              <Select
                options={dependenciasOptions}
                isSearchable={!isMobileDevice()} 
                onChange={(selectedOption) =>
                  handleSelectChange("dependencia", selectedOption)
                }
                value={dependenciasOptions.find(
                  (option) => option.value === formData.dependencia
                )}
                placeholder="Seleccione una dependencia"
                className={`form-control ${
                  validationErrors.includes("dependencia") ? "is-invalid" : ""
                }`}
              />
            </div>
           <div className="form-group">
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
            <div className="form-group">
              <label htmlFor="municipio">Municipio</label>
              <Select
                options={municipiosOptions}
                isSearchable={!isMobileDevice()} 
                onChange={(selectedOption) =>
                  handleSelectChange("municipio", selectedOption)
                }
                value={municipiosOptions.find(
                  (option) => option.value === formData.municipio
                )}
                placeholder="Seleccione un municipio"
                className={`form-control ${
                  validationErrors.includes("municipio") ? "is-invalid" : ""
                }`}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <div className="form-group">
              <label htmlFor="descripcion">Descripción de los hechos</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className={`form-control ${
                  validationErrors.includes("descripcion") ? "is-invalid" : ""
                }`}
                placeholder="Describe aquí..."
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
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
      <small className="form-helper-text">
        Correo electrónico para la legal notificación
      </small>
    </div>
  ) : (
    <>
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
            <span>Particular</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="denunciante"
              value="servidor_publico"
              onChange={handleDenuncianteChange}
              checked={denunciante === "servidor_publico"}
            />
            <span>Servidor Público</span>
          </label>
        </div>
      </div>

      {denunciante === "servidor_publico" && (
        <div className="checkbox-group">
          <label>¿Requiere medidas de protección?</label>
          <input
            type="checkbox"
            name="requiereProteccion"
            onChange={handleProteccionChange}
            checked={requiereProteccion}
          />
        </div>
      )}

      {requiereProteccion && (
        <>
          <div className="form-group">
              <label htmlFor="dependencia">Dependencia</label>
              <Select
                options={dependenciasOptions}
                isSearchable={!isMobileDevice()} 
                onChange={(selectedOption) =>
                  handleSelectChange("dependencia", selectedOption)
                }
                value={dependenciasOptions.find(
                  (option) => option.value === formData.dependencia
                )}
                placeholder="Seleccione una dependencia"
                className={`form-control ${
                  validationErrors.includes("dependencia") ? "is-invalid" : ""
                }`}
              />
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

      {(denunciante || requiereProteccion) && (
        <>
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
            <label htmlFor="primerApellido">Primer Apellido</label>
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
            <label htmlFor="segundoApellido">Segundo Apellido</label>
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
          <div className="form-group">
            <label>Sexo</label>
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
        </>
      )}

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
          <Select
    id="escolaridad"
    name="escolaridad"
    options={escolaridadOptions}
    isSearchable={!isMobileDevice()} 
    onChange={(selectedOption) =>
      handleSelectChange("escolaridad", selectedOption)
    }
    value={escolaridadOptions.find(
      (option) => option.value === formData.escolaridad
    )}
    placeholder="Seleccione una dependencia"
                className={`form-control ${
                  validationErrors.includes("dependencia") ? "is-invalid" : ""
                }`}
  />
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
        <small className="form-helper-text">
          Correo electrónico para la legal notificación
        </small>
      </div>
    </>
  )}
</div>

        );
      default:
        return null;
    }
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={(e) => e.preventDefault()}>
        {renderStepContent()}

        {validationError && (
          <div className="form-error">
            <p>{validationError}</p>
          </div>
        )}

        <div className="form-buttons">
          <button
            type="button"
            className="btn-back"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Atrás
          </button>
          <button
            type="button"
            className="btn-next"
            onClick={currentStep < 3 ? handleNextClick : () => onSubmit(formData)}
          >
            {currentStep < 3 ? "Siguiente" : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
