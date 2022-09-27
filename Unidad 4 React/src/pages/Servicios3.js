import '../../src/App.css'
import { Link } from 'react-router-dom';


const Servicios3 = (props) => {
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
			<div class="serviciosCuerpo-2">
				<h2>Parqueo</h2>
				<img src="Image/camionServicios4.png" alt='asdasasdsda'></img>
				<p> SERVICIO DE ESTACIONAMIENTO RESGUARDADO</p>
				<p> Este servicio consiste en disponer el acceso a aparcamientos a aquellos vehiculos de transporte que precisen permanecer en el recinto de deposito aduanero para el otrogamiento de un servicio principal o complementario a la mercancia que porten</p>
				<p> Incluye la provision de areas de circulacion y permanencia para aquellos vehiculos de transporte cuya carga este haciendo uso del servicio de almacenamiento en sitio descubierto, en espera del cumplimiento de la tramitacion pertinente ante los organismos fiscalizadores que corresponda y que para tal efecto, la carga deba mantenerse sobre el vehiculo. </p>
				<p>Este servicio es independiente del servicio de almacenamiento otorgado a las mercancias y se aplica a todos los vehiculos de transporte, con prescindencia del tipo de carga que puedan transportar</p>
				<p> El servicio contempla las actividades de control de los vehiculos y la supervicion del transito interior, e involucra los recursos relacionados con los dispositivos de control de los accesos, y el area de aparcamiento. Asimismo incluye la vigilancia del sector de permanencia</p>
				<p> La tarifa de este servicio adicional se denomina:</p>
				<ul>
					<li>C-23-1 Parqueo de vehiculo de transporte carga general</li>
					<li>C-23-2 Parqueo de vehiculo de transporte carga granel</li>
					<li>C-23-3 Parqueo de vehiculo PSM</li>
					<li>C-23-4 Parqueo de vehiculo con carga de exportacion</li>
					<li>C-23-5 Parqueo de vehiculo de carga general nacionalizada</li>
					<li>C-23-6 Parqueo de vehiculo de carga general alimentos</li>
				</ul>
				<p> Esta tarifa corresponde al cobro unitario, expresado en dolares, por cada dia de permanencia del vehiculo</p>
				<div>
					<img src="Image/estacionamiento.jpg" alt='aasaa'></img>
					<p>300 Lugares disponibles para estacionamientos</p>
				</div>
				<div>
					<img src="Image/caja.png" height="100%" alt='2211212'></img>
					<p>Posibilidad de pagar por caja</p>
				</div>	
			</div>
	</section>

        </div>
    )
}

export default Servicios3;