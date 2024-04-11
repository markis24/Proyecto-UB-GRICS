import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Componentes/Formulario/Form.jsx'
import Contacto from './Componentes/Contacto/Contacto.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Contacto/>
        <Form/>
    </React.StrictMode>,
);
