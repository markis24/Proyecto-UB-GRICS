import React from 'react';
import './Projectes.css';

function Projectes() {
    const goToInfoProjecte = () => {
        window.open('././InfoProyecto/InfoProjecte', '_blank'); // Asegúrate de que la ruta es correcta y accesible.
    };

    return (
        <div className='Projectes'>
            <h1>Projectes</h1>
            <div className="imagenes-container">
                <div className="imagen-wrapper">
                    <img src="https://media.licdn.com/dms/image/C5612AQFakuoHbuWV8Q/article-cover_image-shrink_720_1280/0/1619548985311?e=2147483647&v=beta&t=_0mYX5IOsgc5mK6YhINF72R4XbjLYJ7ZDeq-LQMFrTI" alt="Miembro" />
                    <button className="info-boton" onClick={goToInfoProjecte}>Más información</button>
                </div>
                <div className="imagen-wrapper">
                    <img src="https://media.licdn.com/dms/image/C5612AQFakuoHbuWV8Q/article-cover_image-shrink_720_1280/0/1619548985311?e=2147483647&v=beta&t=_0mYX5IOsgc5mK6YhINF72R4XbjLYJ7ZDeq-LQMFrTI" alt="Miembro" />
                    <button className="info-boton" onClick={goToInfoProjecte}>Más información</button>
                </div>
                <div className="imagen-wrapper">
                    <img src="https://media.licdn.com/dms/image/C5612AQFakuoHbuWV8Q/article-cover_image-shrink_720_1280/0/1619548985311?e=2147483647&v=beta&t=_0mYX5IOsgc5mK6YhINF72R4XbjLYJ7ZDeq-LQMFrTI" alt="Miembro" />
                    <button className="info-boton" onClick={goToInfoProjecte}>Más información</button>
                </div>
                <div className="imagen-wrapper">
                    <img src="https://media.licdn.com/dms/image/C5612AQFakuoHbuWV8Q/article-cover_image-shrink_720_1280/0/1619548985311?e=2147483647&v=beta&t=_0mYX5IOsgc5mK6YhINF72R4XbjLYJ7ZDeq-LQMFrTI" alt="Miembro" />
                    <button className="info-boton" onClick={goToInfoProjecte}>Más información</button>
                </div>
            </div>
        </div>
    );
}

export default Projectes;
