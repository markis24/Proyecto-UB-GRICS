import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Publicaciones.css';

function Publicaciones() {

    const goToArticle = () => {
        window.open('./Articulo/Titol_article', '_blank');
    };
   
    return (
        <div className='Publicaciones'>
            <h1>Publicacions</h1>
            <br />
            <div onClick={goToArticle}><a>Artículo 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum, porro error itaque voluptates minima pariatur consectetur reprehenderit sed reiciendis!</a></div>
            <br />
            <div onClick={goToArticle}><a>Artículo 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum, porro error itaque voluptates minima pariatur consectetur reprehenderit sed reiciendis!</a></div>
            <br />
            <div onClick={goToArticle}><a>Artículo 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum, porro error itaque voluptates minima pariatur consectetur reprehenderit sed reiciendis!</a></div>
            <br />
            <div onClick={goToArticle}><a>Artículo 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum, porro error itaque voluptates minima pariatur consectetur reprehenderit sed reiciendis!</a></div>
        </div>
    );
}

export default Publicaciones;
