import React from 'react';
import './Nosaltres.css';
import LogoGRICS from './LogoGRICS.png';

const Nosaltres = () => {
    return (
        <div className="quiSomContainer">
            <h1 className="title">Qui Som</h1>
            <div className="content">
                <div className="logoContainer">
                    <img src={LogoGRICS} alt="GRICS Logo" className="logo" />
                </div>
                <div className="text">
                    <h2>Som GRICS, grup de la UB</h2>
                    <p>
                        GRICS és un <b>grup de recerca de la Universitat de Barcelona</b> que utilitza la
                        psicologia social crítica per construir coneixement transformador. Combinem
                        teoria, recerca i acció comunitària per polititzar l'experiència i promoure
                        processos alliberadors en contextos d'opressió i desigualtat.
                    </p>
                    <p>
                        Ens definim com un <b>actor públic</b> compromès amb la justícia, la igualtat i la
                        dignitat. La nostra pràctica transdisciplinària desafia les normes acadèmiques i <b>prioritza
                            el canvi social sobre la productivitat</b>. A més, oferim formació investigadora en
                        grau, màster i doctorat, abastant temes com transformació urbanística, acció
                        comunitària, salut, polítiques identitàries i estudis psicosocials.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Nosaltres;
