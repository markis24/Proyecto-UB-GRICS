import './Header.css';
import React from 'react';
import LogoGRICS from './LogoGRICS.png';

function Header() {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <label class="logo">
                <img src={LogoGRICS} alt="LogoGRICS" className="LogoGRICS" />
            </label>
            <ul>
                <li><a href="#">Inici</a></li>
                <li><a href="#">Membres</a></li>
                <li><a href="#">Projectes</a></li>
                <li><a href="#">Publicacions</a></li>
                <li><a href="#">Contacte</a></li>
                <li><a href="#">ES/EN</a></li>
                <li><button><a>Accedir</a></button></li>
            </ul>
        </nav>
    );
}

export default Header;
