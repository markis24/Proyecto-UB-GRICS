import React from 'react';
import "./Contacto.css";

import LogoGRICS from './LogoGRICS (1).png'; 
import GricsFin from './GricsFin.png';

const Contacto = () => {
  return (
    <footer className='info-uni'>
      <div id="entitats">
        <p className="titols">Entitats financieras</p>
        <div className="images">
          <img src={GricsFin} id="financieras" alt="GricsFin" />
          <img src={LogoGRICS} id="logo" alt="LogoGRICS" />
        </div>
      </div>
      <div id="contacte">
        <p className="titols">Contacte</p>
        <p className="space">gricsub@ub.edu</p>
        <p>632498567</p>
      </div>
      <div id="direccio">
        <p className="titols">Direcció</p>
        <p className="space">C\ Sancho Avila, 161</p>
        <p>Barcelona, España</p>
      </div>
      <div id="titols">
        <p className="titols">Legal</p>
        <a href="#" className="space">Termes i Condicions</a><br /><br />
        <a href="#" className="space">Politica de Privacitat</a>
      </div>
    </footer>
  );
};

export default Contacto;
