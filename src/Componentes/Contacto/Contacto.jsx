// Importación de la hoja de estilos CSS
import "./Contacto.css";

// Definición de un componente funcional
const Contacto = () => {
  return (
    <div className="info-uni">
      {/* HTML / JSX aquí */}
      <h1>Contacte</h1>
      <h2>Universitat de Barcelona</h2>
      <p>Dirección: Calle de la Universidad, 123</p>
      <p>Teléfono: 123-456-789</p>
      <p>Correo: info@universitatdebarcelona.com</p>
      <img src="ruta/a/la/imagen.jpg" alt="Logo de la Universidad de Barcelona" />
    </div>
  );
};

// Exportación del componente para poder ser utilizado en otros archivos
export default Contacto;
