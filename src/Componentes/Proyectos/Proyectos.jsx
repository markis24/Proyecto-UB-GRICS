import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Proyectos.css';

function Projectes() {
    const navigate = useNavigate();

    const goToInfoProjecte = () => {
        navigate('/infoprojecte');
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className='Projectes'>
            <h1>Els Nostres Projectes</h1>
            <div className="imagenes-container">
                <div className="imagen-wrapper" onClick={() => openInNewTab('/infoprojecte')}>
                    <img src="https://nosoyasistenta.com/wp-content/uploads/2017/09/Trabajo-social.jpg" alt="Miembro" />
                    <button className="info-boton">Veure Projecte</button>
                </div>
                <div className="imagen-wrapper" onClick={() => openInNewTab('/infoprojecte')}>
                    <img src="https://img.freepik.com/vector-gratis/companeros-piso-comenzando-proyecto-empresarial_23-2148857003.jpg" alt="Miembro" />
                    <button className="info-boton">Veure Projecte</button>
                </div>
                <div className="imagen-wrapper" onClick={() => openInNewTab('/infoprojecte')}>
                    <img src="https://roymo.es/wp-content/uploads/2022/03/proyecto-digital-exito1.jpg" alt="Miembro" />
                    <button className="info-boton">Veure Projecte</button>
                </div>
                <div className="imagen-wrapper" onClick={() => openInNewTab('/infoprojecte')}>
                    <img src="https://www.gob.mx/cms/uploads/article/main_image/112334/21_Dia_nacional_de_las_y_los_trabajadores_sociales-01.jpg" alt="Miembro" />
                    <button className="info-boton">Veure Projecte</button>
                </div>
                
            </div>
        </div>
    );
}

export default Projectes;
    