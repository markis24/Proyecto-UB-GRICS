import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Componentes/Apps/App.jsx';
import body from './Componentes/body/Publicaciones.jsx'
import Publicaciones from './Componentes/body/Publicaciones.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Publicaciones />
    </React.StrictMode>,
);
