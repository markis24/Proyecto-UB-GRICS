import React from 'react';
import Header from '../NavBar/Header';
import Main_page from '../PaginaPrincipal/Main_page';
import Membres from '../Miembros/Miembros';
import Projectes from '../Proyectos/Proyectos';
import Publicaciones from '../Publicaciones/Publicaciones';
import Contacto from '../Contacto/Contacto';
import Nosaltres from '../QuiSom/Nosaltres'; 
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div>
        <Main_page id="main_page" />
        <Nosaltres id="qui_som" />
        <Membres id="slide-container" />
        <Projectes id="proyectos" />
        <Publicaciones id="publicaciones" />
        <Contacto id="contacto" />
      </div>
    </>
  );
}

export default App;
