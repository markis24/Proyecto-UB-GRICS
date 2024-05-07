import React, { useState } from 'react';
import './Miembros.css';

function Membres() {
    const [showPopup, setShowPopup] = useState(false);
    const miembros = [
        { nombre: 'Laia Aleu Barnadas.', cargo: 'Investigadora en Psicologia Social', descripcion: 'Investigadora en Psicología Social, Universidad de Barcelona. Estudia gentrificación rural y sus impactos en identidad y vínculos ambientales.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Moisés Carmona Monferrer', cargo: 'Profesor Agregado, Universidad de Barcelona', descripcion: 'Doctor en Psicología Social, especializado en intervención psicosocial, comunitaria y sostenibilidad. Dirige proyectos nacionales y europeos.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Andrés Di Masso Tarditti', cargo: 'Profesor Agregado, Universidad de Barcelona', descripcion: 'Investiga en psicología política y social, enfocado en urbanismo y resistencia. Coordinador de GRICS y proyectos de investigación.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Esteve Espelt', cargo: 'Profesor de Psicología Social, Universidad de Barcelona', descripcion: 'Especializado en prejuicio y racismo, utiliza literatura para analizar y divulgar realidades psicosociales.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Ruben David Fernández Carrasco', cargo: 'Activista y Educador', descripcion: 'Enfocado en arte performativo para cambio social y empoderamiento. Investigador en pedagogías emancipadoras.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Víctor Jorquera', cargo: 'Docente de Psicología Social, Universitat de Barcelona', descripcion: 'Docente en psicología política y social, explora violencia heterosexista y poder en migraciones. Activo en movimientos sindicales.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Andrea Latorre Reolon', cargo: 'Profesora, Universitat Oberta de Catalunya', descripcion: 'Investiga sobre migración, exclusión social, y socialización familiar. Anteriormente profesora en MIPS.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Beatriz Layunta Maurel', cargo: 'Profesora, Universidad de Barcelona', descripcion: 'Investiga en psicología social de la salud, género, y exclusión social. Apasionada de las artes performativas.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' }
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
                            <h4>{miembroSeleccionado.cargo}</h4>
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
