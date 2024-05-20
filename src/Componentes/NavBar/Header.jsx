import React from 'react';
import './Header.css';
import LogoGRICS from './LogoGRICS.png';
import { Link } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo">
                <img src={LogoGRICS} alt="Logo GRICS" className="LogoGRICS" />
            </label>
            <ul>
                <li><Link to="mainPageId" smooth={true} duration={1000} offset={-150}>Inici</Link></li>
                <li><Link to="quiSomContainer" smooth={true} duration={1000} offset={-80}>Nosaltres</Link></li>
                <li><Link to="slide-container" smooth={true} duration={1000} offset={-80}>Membres</Link></li>
                <li><Link to="Projectes" smooth={true} duration={1000} offset={-80}>Projectes</Link></li>
                <li><Link to="Publicaciones" smooth={true} duration={1000} offset={-80}>Publicacions</Link></li>
                <li><Link to="info-uni" smooth={true} duration={1000} offset={-80}>Contacte</Link></li>
                <li><button><a>Accedir</a></button></li>
            </ul>
        </nav>
    );
}

export default Header;
