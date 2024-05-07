import React from 'react';
import './Main_page.css';
import logo from './img_main_page/image.png';

function Main_page() {
    return (
        <div id="mainPageId">
            <h1>Qui Som</h1>  {/* Título centrado en la parte superior */}
            <div className='content'>
                <div className="text">
                    <p>GRICS és un grup de recerca de la Universitat de Barcelona
                        que utilitza la psicologia social crítica per fomentar el
                        coneixement que és políticament problematitzador i socialment
                        transformador. S'enfoca a utilitzar els estudis psicosocials per
                        polititzar experiències i fomentar processos alliberadors en
                        contextos d'opressió i desigualtat. GRICS es posiciona com un actor
                        públic compromès amb la justícia, la igualtat i la dignitat, promovent
                        un coneixement transdisciplinar que desafia les normatives epistèmiques i
                        metodologies ortodoxes. A més a més, està conscient de les contradiccions
                        del capitalisme acadèmic i prioritza el canvi social sobre la productivitat
                        acadèmica, oferint també formació investigadora a diferents nivells acadèmics.</p>
                </div>
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
}

export default Main_page;
