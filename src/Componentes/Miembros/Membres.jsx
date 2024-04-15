import React, { useState } from 'react';
import './Membres.css';

function Membres() {
    const [showPopup, setShowPopup] = useState(false);
    const miembros = [
        { nombre: 'Miembro 1', cargo: 'Cargo 1', descripcion: 'Descripción 1', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Miembro 2', cargo: 'Cargo 2', descripcion: 'Descripción 2', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Miembro 3', cargo: 'Cargo 3', descripcion: 'Descripción 3', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Miembro 4', cargo: 'Cargo 4', descripcion: 'Descripción 4', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' }
    ];

    const [miembroSeleccionado, setMiembroSeleccionado] = useState(miembros[0]);

    const mostrarPopup = (miembro) => {
        setMiembroSeleccionado(miembro);
        setShowPopup(true);
    };

    return (
        <div className='Membres'>
            <h1>MEMBRES</h1>
            <div className="imagenes-container">
                {miembros.map((miembro, index) => (
                    <div className="imagen-wrapper" key={index}>
                        <img src={miembro.imagen} alt="Miembro" />
                        <button className="info-boton" onClick={() => mostrarPopup(miembro)}>Más información</button>
                    </div>
                ))}
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-boton" onClick={() => setShowPopup(false)}>X</button>
                        <div className="popup-text">
                            <h2>{miembroSeleccionado.nombre}</h2>
                            <p>{miembroSeleccionado.cargo}</p>
                            <p>{miembroSeleccionado.descripcion}</p>
                        </div>
                        <div className="popup-image">
                            <img src={miembroSeleccionado.imagen} alt="Miembro Seleccionado" />
                            <button className="cv-boton">Enllaç Curriculum</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Membres;
