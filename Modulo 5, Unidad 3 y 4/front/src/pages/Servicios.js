import '../../src/App.css'
import { Link } from 'react-router-dom';


const Servicios = (props) => {
    return (
        <div>
            <section className="Presentacion">
		<div className="PresentacionFoto">
			<div className="PresentacionTitulo">
				<h1>SERVICIOS</h1>
			</div>
		</div>
	</section>
	<section className="serviciosCuerpo">
			<div className="serviciosCuerpo-1">
                <Link to="/Servicios">CARGAS EN TRANSITO</Link>
				<Link to="/Servicios1">IMPORT. POR CUENTA DE TERCEROS</Link>
				<Link to="/Servicios2">IMPORTACION</Link>
				<Link to="/Servicios3">PARQUEO</Link>
				<Link to="/Servicios4">LEGISLACION</Link>
				<Link to="/Servicios5">PROCESOS MENORES</Link>
			</div>
			<div className="serviciosCuerpo-2">
				<h2>Carga en Transito</h2>
				<img src="Image/camion.jpg" alt='dasd'></img>
				<p> SERVICIO DE CARGA EN TRANSITO</p>
				<ul>
					<li>Mayores oportunidades para el retiro desde Origen (Valparaiso- San Antonio) por operar con Dti (Trasbordo)</li>
					<li>Obtencion de mejores tarifas al manejar mayores volumenes de carga</li>
					<li>Mejores condiciones logisticas para el transito internacional</li>
				</ul>
				<img src="Image/dibujo.jpg" alt='asdasd' className="img2"></img>
			</div>
	</section>

        </div>
    )
}

export default Servicios;