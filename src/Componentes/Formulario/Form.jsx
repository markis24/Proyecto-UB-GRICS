import { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
  };

  return (
    <div className="Form">
      <h1>Formulario de contacto</h1>
      <form onSubmit={handleSubmit}>
        <h2>Datos Personales</h2>
        <div>
          <label htmlFor="fname">Nombre:</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fsurname">Apellidos:</label>
          <input
            type="text"
            name="fsurname"
            id="fsurname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="femail">Email:</label>
          <input
            type="text"
            name="femail"
            id="femail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensaje">Escribe un mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <br />
        <input type="submit" value="Enviar" />
        <br />
      </form>
    </div>
  );
}

export default Form;
