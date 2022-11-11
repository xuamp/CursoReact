import "../../src/App.css";
import { Link } from "react-router-dom";

const Servicios5 = (props) => {
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
				<h2>Procesos Menores</h2>
				<img src="Image/cajas.jpg" alt="aaaaaaa"></img>
				<p> PROCESOS MENORES<br></br>RES. Nº 3594 DNA- ART.111 ORD. DE ADUANA</p>
				<ul>
					<li>Las mercancias extranjeras podran ser obejto de la destinacion aduanera de deposito, hasta por el plazo de un año sin previo pago de los derechos e impuestos</li>
					<li>¿Que se puede realizar?<br></br> Presentacion de producto, calidad comercial, preparacion en su distribucion o comercializacion</li>
					<li>Deberan ser mercancias nacaionales o nacionalizadas</li>
					<li>Las operaciones no pueden modificar su codigo arancelario</li>
				</ul>
			</div>
	</section>
    </div>
  );
};

export default Servicios5;