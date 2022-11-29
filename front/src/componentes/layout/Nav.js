
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
			<a href="https://www.instagram.com/dockmotion/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
			<a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
       </nav>
    )
};

export default Nav;

