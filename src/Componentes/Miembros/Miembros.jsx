import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Miembros.css';


const Membres = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const miembros = [
        { nombre: 'Laia Aleu Barnadas.', cargo: 'Investigadora en Psicologia Social', descripcion: 'Investigadora en Psicología Social, Universidad de Barcelona. Estudia gentrificación rural y sus impactos en identidad y vínculos ambientales.', imagen: 'https://fotografias.antena3.com/clipping/cmsimages01/2021/05/02/26E03450-C5FB-4D16-BC9B-B282AE784352/57.jpg?crop=1868,1080,x52,y0&width=1280&height=740&optimize=low&format=webply' },
        { nombre: 'Moisés Carmona Monferrer', cargo: 'Profesor Agregado, Universidad de Barcelona', descripcion: 'Doctor en Psicología Social, especializado en intervención psicosocial, comunitaria y sostenibilidad. Dirige proyectos nacionales y europeos.', imagen: 'https://media.istockphoto.com/id/1200677760/es/foto/retrato-de-apuesto-joven-sonriente-con-los-brazos-cruzados.jpg?s=612x612&w=0&k=20&c=RhKR8pxX3y_YVe5CjrRnTcNFEGDryD2FVOcUT_w3m4w=' },
        { nombre: 'Andrés Di Masso Tarditti', cargo: 'Profesor Agregado, Universidad de Barcelona', descripcion: 'Investiga en psicología política y social, enfocado en urbanismo y resistencia. Coordinador de GRICS y proyectos de investigación.', imagen: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg' },
        { nombre: 'Esteve Espelt', cargo: 'Profesor de Psicología Social, Universidad de Barcelona', descripcion: 'Especializado en prejuicio y racismo, utiliza literatura para analizar y divulgar realidades psicosociales.', imagen: 'https://img.freepik.com/foto-gratis/hombre-feliz-pie-playa_107420-9868.jpg?1' },
        { nombre: 'Ruben David Fernández Carrasco', cargo: 'Activista y Educador', descripcion: 'Enfocado en arte performativo para cambio social y empoderamiento. Investigador en pedagogías emancipadoras.', imagen: 'https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=NqMHLF8T4RzPaBE_WMnflSGB_1-kZZTQgAkekUxumZg=  ' },
        { nombre: 'Víctor Jorquera', cargo: 'Docente de Psicología Social, Universitat de Barcelona', descripcion: 'Docente en psicología política y social, explora violencia heterosexista y poder en migraciones. Activo en movimientos sindicales.', imagen: 'https://www.cdc.gov/preconception/spanish/images/man-with-arms-crossed.jpg' },
        { nombre: 'Andrea Latorre Reolon', cargo: 'Profesora, Universitat Oberta de Catalunya', descripcion: 'Investiga sobre migración, exclusión social, y socialización familiar. Anteriormente profesora en MIPS.', imagen: 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/mujer-feliz_0.jpg.webp?itok=qVurZLE7' },
        { nombre: 'Beatriz Layunta Maurel', cargo: 'Profesora, Universidad de Barcelona', descripcion: 'Investiga en psicología social de la salud, género, y exclusión social. Apasionada de las artes performativas.', imagen: 'https://kandiolatam.com/public/media/S0ZvB7AnjnOkBVjyGZG7GHcF7eJtMu1M3537Lwoo.webp' }
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
