import '../../src/App.css'
import { Link } from 'react-router-dom';


const Servicios1 = (props) => {
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
				<h2>Importacion por cuenta de Terceros</h2>
				<p className="servicios2p">Si bien la importación por cuenta de terceros se encuentra prohibida en nuestro país, podemos generar operaciones para los clientes que lo requieran con nuestra firma importadora</p>

				<p className="servicios2p">A través de los años llevamos adelante gran cantidad de operaciones de importación en la cuál nuestra firma importadora oficiaba como titular de las mercaderías despachadas, para luego transferir la titularidad al comprador definitivo de la misma.</p> 

				<p className="servicios2p">Si Ud. nos envía por e-mail a la dirección info@gcscomercial.com.ar o gcures@gcscomercial.com.ar los datos de su posible compra en el exterior, con gusto podremos asesorarlo en la importación y nacionalización de las mercaderías, incluído fletes marítimos o aéros , seguro internacional de carga, despacho en Argentina y entrega a destinatario final de la misma. De esa manera mantendrá centralizado el desarrollo de su negocio de importación.</p> 

				<p className="servicios2p">Le rogamos tenga a bien se comunique con nosotros para darle mayores detalles en cuánto a la operatoria a seguir en estos casos específicos. </p>
			</div>
	</section>

        </div>
    )
}

export default Servicios1;