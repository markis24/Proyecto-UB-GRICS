import './Main_page.css';
import logo from './img_main_page/img.jpg';

function Main_page() {
    return (
        <div>
            <div className='columna-izquierda'>
                <img src={logo} alt="Logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam odit non nulla consequuntur consectetur architecto minus iusto autem, perferendis blanditiis asperiores aspernatur id? Alias ad quasi, sed ut totam impedit ratione exercitationem distinctio vitae vero dolor atque velit dolorum assumenda? Provident libero et doloribus deleniti quae odit modi. Fugiat?</p>
            </div>
            <div className='columna-derecha'>
                <h2>Actualitat</h2>
                <img src={logo} alt="Logo" />
                <img src={logo} alt="Logo" />
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
}

export default Main_page;
