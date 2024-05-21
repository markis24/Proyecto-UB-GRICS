import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Miembros.css';


const Membres = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

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

    const openPopup = (miembro) => {
        setSelectedMember(miembro);
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        
        <div className="slide-container swiper">
            <h1 className='tituloMembres'>Membres de GRICS</h1>
            <Swiper
                spaceBetween={15}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {miembros.map((miembro, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <div className="image-content">
                                <span className="overlay"></span>
                                <div className="card-image">
                                    <img src={miembro.imagen} alt="" className="card-img" />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="name">{miembro.nombre}</h2>
                                <p className="description">{miembro.descripcion}</p>
                                <button className="button" onClick={() => openPopup(miembro)}>Mes Informació</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {popupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={closePopup}>X</button>
                        <h2 className="popup-name">{selectedMember.nombre}</h2>
                        <p className="popup-catchphrase">Una breve frase impactante aquí.</p>
                        <div className="popup-image">
                            <img src={selectedMember.imagen} alt="Miembro Seleccionado" />
                        </div>
                        <button className="cv-button">Ver Curriculum</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Membres;
