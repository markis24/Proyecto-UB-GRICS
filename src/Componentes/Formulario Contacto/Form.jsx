import { useState } from "react";
import "./Form.css";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
  };
  return (
    <div className="Form">
        <h3>Formulario Contacto</h3>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <br />
        <input type="button" value="Enviar" />
        <br />
      </form>
    </div>
  );
}
export default Form;
