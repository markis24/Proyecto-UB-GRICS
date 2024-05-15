import React from 'react';
import './Nosaltres.css';
import LogoGRICS from './LogoGRICS.png';
import LogoUB from './LogoUB.png';

function Nosaltres() {
    return (
        <div>
            <h1 id="qui-som">Qui Som</h1>
            <div id="flexl-grics">
            <img src={LogoGRICS} alt="Logo GRICS" className="LogoGRICS" />
                    <p>
                        Our mission is to utilize the internet as a creative medium to bring your brand's vibrant story to life.Our
                        mission is to utilize the internet as a creative medium to bring your brand's vibrant story to life. Our
                        mission is to utilize the internet as a creative medium to bring your brand's vibrant story to life.Our
                        mission is to utilize the internet as a creative medium to bring your brand's vibrant story to life.Our
                        mission is to utilize the internet as a creativ
                    </p>
            </div>
            <div id="flexr-grics">
                <p>
                    Our mission is to utilize the internet as a creative medium to bring your brand's vibrant story to life.Our
                    mission is to utilize the internet as a creative mediu  m to bring your brand's vibrant story to life. Our
                    missioOur mission is to utilize the internet as a creative medium to bring your brand's vibrant story to life.Our
                    mission is to utilize the internet as a creative medium to bring your brand's vibrant story to life. Our
                    missio
                </p>
                <img src={LogoUB} alt="Logo UB" className="LogoUB" />
            </div>
        </div>
    );
}

export default Nosaltres;