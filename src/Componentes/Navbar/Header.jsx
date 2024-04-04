import './Header.css';
import React from 'react';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

function Header() {
    return (
        <nav className="navbar">
            <div className="brand-title">LOGO.</div>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">INICI</a></li>
                    <li><a href="#">MEMBRES</a></li>
                    <li><a href="#">RECERCA</a></li>
                    <li><a href="#">PUBLICACIONS</a></li>
                    <li><a href="#">CONTACTE</a></li>
                    <li><a href="#">ES/EN</a></li>
                    <img className = "icono" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAb1JREFUSEvN1k3ITUEYB/DfK18lJcmOhCyUKCs7lGJhQcpGoXyUlJ0US5LsUD42rFCilLKwYMVCCYWVfKWUkgUbCTN1jt6ue95nzts5XbOd5/x/M819Zu6YEY2xEbkmA0/BNiyvFv0SN/C7zSbawmtwBcsGkFfYiceleBt4Pe5iekP4d2zAoxK8FJ6F95gbhH7AUvyI8FJ4Ly5FYdV8Pv+bUW0pfAH7o7Bq/jQOR7Wl8EXsi8Kq+fM4ENWWwkdxPAqr5o/gVFRbCueefRGFVb28JLXWm6i2FM45l7ErCDyDQxGa59vAM6obanNDcF7YHvzqGq4XugNbxvX0J1zD7RKwrmmz4za5Ye1/Dy/A1nQjrUiPxKLUWlMHtvQz/fDepiN4hlv4GG052vFKnMSmKGhg/k51e+VXa+iYCM431TlMa4nW5fmh2J2e0KvDvm+Ct+P6JMHxn+XW2oh7g1nD4Plppe8wswM4R3zBQuT3+u8YBp/FwY7QOuZYOrITEfw5ne28juEnWD0RvBivO0bruNn41nRz5T9zD3uCc2s+b4LX4n5P8Do8aILnYFVP8FN8bYJ7Mv+Nja7M3hYyMvgPElg8H/XErXYAAAAASUVORK5CYII=" />
                </ul>
            </div>
        </nav>
    );
}

export default Header;