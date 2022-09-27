import '../../src/App.css'
import { Link } from 'react-router-dom';


const Servicios2 = (props) => {
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
				<h2>Importacion</h2>
				<ul className="servicios3lista">
					<li>VALOR CEF EN LA APROBACION DE LAS SIMI - OBSERVACIONES</li>
					<li>SEGURIDAD ELECTRICA- Normativa vigente a la fecha</li>
					<li>FLETES INTERNACIONALES AEREOS Y MARITIMOS</li>
					<li>NUESTROS SERVICIOS A IMPORTADORES</li>
					<li>Productos de Origen Animal no Alimentario</li>
					<li>Intervenciones Previas a la Importación de determinadas mercaderías</li>
					<li>BIENES DE CAPITAL USADOS - Normativa aplicable</li>
					<li>LNA - Licencias No Automáticas - NORMATIVA VIGENTE AL 07/07/2017</li>
					<li>SIMI - Excepciones al régimen e información útil</li>
					<li>NUESTROS SERVICIOS A IMPORTADORES</li>
					<li>SIMI - Sistema Integral de Monitoreo de Importaciones - Ex DJAI</li>
					<li>Intervenciones de Terceros Organismos</li>
				</ul>
			</div>
	</section>

        </div>
    )
}

export default Servicios2;