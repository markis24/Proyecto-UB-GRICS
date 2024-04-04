import './Membres.css';
import React from 'react';

function Membres() {
    return (
        <div className='Membres'>
            <h1>MEMBRES</h1>
            <div className="imagenes-container"> 
                <div className="imagen-wrapper">
                    <img src="https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg" alt="Miembro"/>
                    <button className="info-boton">Más información</button>
                </div>
                <div className="imagen-wrapper">
                    <img src="https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg" alt="Miembro"/>
                    <button className="info-boton">Más información</button>
                </div>
                <div className="imagen-wrapper">
                    <img src="https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg" alt="Miembro"/>
                    <button className="info-boton">Más información</button>
                </div>
                <div className="imagen-wrapper">
                    <img src="https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg" alt="Miembro"/>
                    <button className="info-boton">Más información</button>
                </div>
            </div>
        </div>
    );
}

export default Membres;
