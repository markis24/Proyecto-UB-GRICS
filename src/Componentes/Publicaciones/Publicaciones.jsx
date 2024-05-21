import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Publicaciones.css';

function Publicaciones() {
    const navigate = useNavigate();

    const goToArticle = (url) => {
        navigate(url);
    };

    const openArticleInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className='Publicaciones'>
            <h1>Publicacions</h1>
            <br />
            <div onClick={() => openArticleInNewTab('/titol_article')}><a><b>Artículo 1 -</b> Di Masso, A., Berroeta, H., Pradillo C., &amp; Aleu, L. (2022). Gentrificación y desposesión de lugar:
                Dinámicas subjetivas del desplazamiento simbólico y la gentrificación. Anuario de Psicología, 52(1),
                97-106.</a></div>
            <br />
            <div onClick={() => openArticleInNewTab('/titol_article')}><a><b>Artículo 2 -</b> Di Masso, A., Carmona, M. (2022). ¿Psicología, crítica, transformación social? Contribuciones a la
                politización de la investigación y la experiencia psicológicas. Anuario de Psicología, 52(1), 1-6.</a></div>
            <br />
            <div onClick={() => openArticleInNewTab('/titol_article')}><a><b>Artículo 3 -</b>Vivas, P., Prat, J., Sánchez, J., Aleu, L., &amp; Di Masso, A. (2022). Gentrificació i turistificació a la
                Cerdanya? Edicions Institut d’Estudis Ceretans.</a></div>
            <br />
            <div onClick={() => openArticleInNewTab('/titol_article')}><a><b>Artículo 4 -</b>Manzo, L., Williams, D., Di Masso, A., Raymond, C., &amp; Gulsrud, N. (2023). Using senses of place to
                help communities navigate place disruption and uncertainty. Landscape Journal, 42(1), 37-52.</a></div>
            <br />
            <div onClick={() => openArticleInNewTab('/titol_article')}><a><b>Artículo 5 -</b> Di Masso, A., Berroeta, H., Pradillo C., &amp; Aleu, L. (2022). Gentrificación y desposesión de lugar:
                Dinámicas subjetivas del desplazamiento simbólico y la gentrificación. Anuario de Psicología, 52(1),
                97-106.</a></div>
            <br />
        </div>
    );
}

export default Publicaciones;
