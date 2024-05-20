import React from 'react';
import { Link } from 'react-scroll';
import './Main_page.css';
import cerebro from './img_main_page/image.png';

function MainPage() {
    return ( 
        <div id="mainPageId">
            <img src={cerebro} alt="Logo principal" className="img-animation" width={480} />
            <h1 id="h1f" className="text-animation">Benvolguts a</h1>
            <h1 id="h1s" className="text-animation">UB GRICS</h1>
            <div id="container-page">
                <p className="animation-body">
                    Som GRICS, grup de recerca de la Universitat de Barcelona. 
                    Polititzem l’experiència i impulsem processos alliberadors, 
                    integrant psicologia social crítica, recerca transdisciplinar i
                    acció comunitària per la justícia i la igualtat.
                </p>
                <Link
                    to="quiSomContainer"
                    smooth={true}
                    duration={1000}
                    offset={-80}
                    className="scroll-btn" 
                >
                    <button id='buttonAmarillo'><b>Més Sobre Nosaltres</b></button>
                </Link>
            </div>
        </div>
    );
}

export default MainPage;
