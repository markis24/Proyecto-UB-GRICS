import Header from '../Navbar/Header.jsx';
import Membres from '../Miembros/Membres.jsx';
import Projectes from '../Proyectos/Projectes.jsx';


import './App.css';

function App() {
    return (
        <div className='container'>
            <Header />
            <Membres />
            <Projectes/>
        </div>
    );
}

export default App;
