import React from 'react';
import './Main_page.css';
import cerebro from './img_main_page/image.png'; // Verifica que la ruta del archivo es correcta

function MainPage() {
    return (
        <div id="mainPageId">
            <img src={cerebro} alt="Logo principal" className="img-animation" width={480}/>
            <h1 id="h1f" className="text-animation">Benvolguts a</h1>
            <h1 id="h1s" className="text-animation">UB GRICS</h1>
            <div id="container-page">
                <p className="animation-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quia consectetur maiores magni modi corrupti,
                    reprehenderit tempore eligendi ad laborum numquam quidem suscipit perferendis alias!
                </p>
                <a href="#" id="buttonAmarillo"><b>Browse More</b></a>
            </div>
        </div>
    );
}

export default MainPage;
