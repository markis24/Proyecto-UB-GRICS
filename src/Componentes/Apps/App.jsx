import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../NavBar/Header';
import Main_page from '../PaginaPrincipal/Main_page';
import Membres from '../Miembros/Miembros';
import Projectes from '../Proyectos/Proyectos';
import Publicaciones from '../Publicaciones/Publicaciones';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="/miembros" element={<Membres />} />
        <Route path="/proyectos" element={<Projectes />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
      </Routes>
    </Router>
  );
}

export default App;

