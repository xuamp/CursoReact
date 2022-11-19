
import { Link } from 'react-router-dom';
import '../../../src/App.css';

const Nav = (props) => {
    return (
       <nav className='nav'>
        <img alt='dalee' src='Image/Logo.jpg'></img>
            <Link to="/">Home</Link>
            <Link to="/Servicios">Servicios</Link>
            <Link to="/Nosotros">Quienes Somos</Link>
            <Link to="/Novedades">Novedades</Link>
            <Link to="/Contacto">Contacto</Link>
            <Link to="/instagram"><i class="fa-brands fa-instagram"></i></Link>
            <Link to="/contacto"><i class="fa-brands fa-facebook-f"></i></Link>
       </nav>
    )
};

export default Nav;

