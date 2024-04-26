import React from 'react';
import './Main_page.css';
import logo from './img_main_page/image.png';

function Main_page() {
    return (
        <div id="mainPageId">
            <h1>Qui Som</h1>  {/* Título centrado en la parte superior */}
            <div className='content'>
                <div className="text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel accusantium facilis alias consequatur officiis asperiores, culpa quaerat quas molestias corporis? Illum delectus minus minima molestiae pariatur modi. Atque voluptas omnis ipsam necessitatibus maiores minus beatae, iure, explicabo quia at dolores porro consectetur temporibus architecto debitis tenetur velit sequi hic consequuntur, deleniti delectus. Minima, tempora debitis reprehenderit quis voluptas, accusamus fuga expedita repellat odio error illo blanditiis natus autem. Molestiae, sed ipsum. Facere enim laudantium esse pariatur quas. Alias doloremque nemo, praesentium quam error itaque officia, veniam debitis ab voluptas fugiat consequuntur saepe incidunt accusamus unde, deleniti cumque quasi recusandae aspernatur ipsam reprehenderit voluptatum. Qui eveniet et nisi impedit ipsum error dicta dolor ea consequuntur, amet, a, voluptas accusantium? Obcaecati provident fugiat unde, in ipsum voluptate eaque doloribus quasi ab id tempore minima omnis mollitia a minus sed odio, harum ipsam?</p>
                </div>
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
}

export default Main_page;
