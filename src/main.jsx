import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './Componentes/Apps/App'; // Este import está dentro de src
import InfoProjecte from '../InfoProyecto/InfoProjecte'; // Importa desde un directorio fuera de src
import Titol_article from '../Articulo/Titol_article'; // Importa desde un directorio fuera de src
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Infoprojecte" element={<InfoProjecte />} />
      <Route path="/Titol_article" element={<Titol_article />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
