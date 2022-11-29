import { Link } from "react-router-dom";
import "../../src/App.css";

const Home = (props) => {
  return (
    <div>
      <section className="fotoGrande">
        <div className="DivFG1">
          <img src="Image/containers.jpeg" alt="sisi"></img>
          <h2>
            Soluciones Logisticas<br></br> Integrales
          </h2>
          <p>
            Facilitamos el transporte de tus mercaderías, brindado servicios
            logísticos, de<br></br> aduana y comercio exterior.
          </p>
          <div className="boton">
            <Link to="/Servicios">
              <p className="nuestrosServicios">Nuestros Servicios</p>
            </Link>
          </div>
        </div>
        <div className="DivFG2">
          <div className="DivFG-C">
            <i className="fa-solid fa-globe"></i>
            <div>
              <h3>Comercio Exterior</h3>
              <p>
                {" "}
                Gestionamos todo tipo de cargas destiadas a<br></br> la
                importacion y exportacion
              </p>
            </div>
          </div>
          <div className="DivFG-C">
            <i className="fa-solid fa-truck-arrow-right"></i>
            <div>
              <h3>Logistica Nacional</h3>
              <p>
                {" "}
                Distribuimos a todos los puntos del pais cargas<br></br>{" "}
                generales y mercacionas peligrosas (IMO)
              </p>
            </div>
          </div>
          <div className="DivFG-C">
            <i className="fa-solid fa-magnifying-glass-chart"></i>
            <div>
              <h3>Estudio aduanero</h3>
              <p>
                {" "}
                Somos especialistas en la correcta clasificacion<br></br> de las
                mercancias y su valor imponible
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="franja">
        <div>
          <h5>Sobre Nosotros</h5>
        </div>
        <div className="padreCajitas">
          <div className="cajitas">
            <Link className="fa-solid fa-handshake-simple lol"></Link>
            <p>
              <span>Mision</span>
            </p>
            <p>
              Generamos soluciones innovadoras acompañando a las empresas en la
              realización, planificación y ejecución en el área de comercio
              internacional.
            </p>
          </div>
          <div className="cajitas">
            <Link className="fa-solid fa-eye lol"></Link>
            <p>
              <span>Vision</span>
            </p>
            <p>
              Ser una de las consultoras más reconocida del mercado, por su
              innovación, eficacia y excelencia en lo hacemos.
            </p>
          </div>
          <div className="cajitas">
            <Link className="fa-solid fa-heart lol"></Link>
            <p>
              <span>Valores</span>
            </p>
            <p>
              En nuestra organización fijamos nuestros valores en la visión de
              nuestro CEO que se basa en el respeto, el compromiso, lealtad,
              trabajo en equipo, confidencialidad y generar soluciones
              innovadoras a nuestros clientes.
            </p>
          </div>
        </div>
      </section>
      <section className="servicios">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2> Soluciones de Logistica Integrales</h2>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <img src="Image/ventana1.jpg" alt="asdasdasd"></img>
          <h3> Comercio Exterior</h3>
          <p>
            Nos especializamos en la gestion de todo<br></br>tipo de cargas
            destinadasa la importacion<br></br>y exportacion
          </p>
          <Link to="/Servicios"><span>Ver Mas</span></Link>
        </div>
        <div>
          <img src="Image/ventana2.jpg" alt="paos"></img>
          <h3> Logistica Nacional</h3>
          <p>
            Distribuimos desde y hacia todos los paises<br></br>limitrofes
            cargas generales y mercancias<br></br>peligrosas
          </p>
          <Link to="/Servicios4"><span>Ver Mas</span></Link>
        </div>
        <div>
          <img src="Image/ventana3.jpg" alt="ololo"></img>
          <h3> Estudio Aduanero</h3>
          <p>
            Nuestro departamento de aduanas esta<br></br>Conformado por
            profesionales altamente<br></br>capacitados para ayudarlo de la
            mejor manera
          </p>
          <Link to="/Servicios5"><span>Ver Mas</span></Link>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <section>
        <div className="porque">
          <div>
            <h4>¿POR QUE ELEGIR DOCK MOTION?</h4>
          </div>
          <div>
            <ul className="lista">
              <li>
                Amplio horario para retiro de paquetes y envios a domicilio
              </li>
              <li>Envio gratuito en menos de 24 hs</li>
              <li>
                Seguimiento y localizacion personalizada y en linea de los
                paquetes
              </li>
            </ul>
          </div>
          <div>
            <ul className="lista">
              <li>Acceso desde dispositivos mobiles</li>
              <li>Accesi a la base de conocimientos de Dock Motion</li>
              <li>Permite a las compañias gestionar sus pedidos</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contacto">
        <div className="contacto1">
          <p>
            Te ofrecemos la mejor estructura para todos los segmentos de tu
            empresa
          </p>
          <img src="Image/chat.jpg" alt="lklk"></img>
          <div className="formulario">
            <form>
              <label>Nombre y Apellido</label>
              <input type="text" name=""></input>
              <label>Correo electronico</label>
              <input type="email" name=""></input>
              <label>Empresa</label>
              <input type="text" name=""></input>
              <label>Telefono</label>
              <input type="number" name=""></input>
              <br></br>
              <Link to="/#">
                <input
                  className="enviar"
                  type="submit"
                  name=""
                  value="Enviar"
                ></input>
              </Link>
            </form>
          </div>
        </div>
      </section>
      <section className="desplegable">
			<div>
				<p> Asesorate con Dock Motion</p>
				<img src="Image/Logosolo.jpg" alt="lkakk"></img>
			</div>
		</section>
    </div>
  );
};

export default Home;
