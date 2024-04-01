import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Componentes/Apps/App.jsx';
import body from './Componentes/body/Publicaciones.jsx'
import Publicaciones from './Componentes/body/Publicaciones.jsx';
import Main_page from './Componentes/body/Titol_projecte.jsx';
import Titol_projecte from './Componentes/body/Titol_projecte.jsx';
import Titol_article from './Componentes/body/Titol_article.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Titol_article />
        <Titol_projecte />
        <Publicaciones />
    </React.StrictMode>,
);