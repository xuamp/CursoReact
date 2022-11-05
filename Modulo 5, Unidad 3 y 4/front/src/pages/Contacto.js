
import '../../src/App.css'

const Contacto = (props) => {
    return (
        <div>
            <section className="fotoContacto">
				<h3>CONTACTO</h3>
				<i className="fa-solid fa-arrow-down"></i>
		    </section> 
            <section className="contacForm">
			    <h4>Tus Datos</h4>
			    <div className="contacForm1">	
				    <div className="hijo1">
					    <form>
						    <input type="text" name="" placeholder="Nombre..."></input>
						    <input type="text" name="" placeholder="Empresa..."></input>
						    <input type="text" name="" placeholder="Direccion..."></input>
						    <input type="number" name="" placeholder="Telefono..."></input>
						    <input type="number" name="" placeholder="Celular..."></input>
						    <input type="email" name="" placeholder="Direccion de Mail..."></input>
						    <input type="text" name="" placeholder="Ciudad..."></input>
						    <input type="text" name="" placeholder="Pais..."></input>
						    <textarea placeholder="Mensaje"></textarea>
						    <button className="enviar2">enviar</button>					
					    </form>
				    </div>
                    <div className="hijo2">	
					    <div className="titulo">
						    <i className="fa-solid fa-hexagon-check"></i>			 
						    <p>Dock Motion</p>
					    </div>
				    <div>
					    <i className="fa-solid fa-mobile-screen-button"></i>
					    <p><span className="listaIconos">Argentina:</span><br></br> +54 9 114401-8119</p>
				    </div>
				    <div>
					    <i className="fa-solid fa-mobile-screen-button"></i>
					    <p><span className="listaIconos">Miami:</span><br></br> +1 305 306 3125</p>
				    </div>
				    <div>
					    <i className="fa-solid fa-mobile-screen-button"></i>
					    <p><span className="listaIconos">China:</span><br></br> 13532621034</p>
				    </div>
				    <div>
					    <i className="fa-solid fa-at"></i>
					    <p><span className="listaIconos"> Mail Argentina:</span> Info@dockmotion.com</p>
				    </div>
                    <div>
					    <i className="fa-solid fa-at"></i>
					    <p><span className="listaIconos">Mail Miami:</span><br></br> info@mia-cargo.com</p>
				    </div>
				    <div>
					    <i className="fa-solid fa-map-location-dot"></i>
					    <p>7953/55 NW 64th Street, Miami FL, 33166</p>
				    </div>
				    <div>
					    <i className="fa-solid fa-map-location-dot"></i>
					    <p>Buenos Aires, Av. Corrientes 980, CABA Argentina</p>
				    </div>
				    <div>
					    <i className="fa-brands fa-instagram"></i>
					    <p>dockmotion</p>
				    </div>
				    <div>
					    <i className="fa-brands fa-facebook-f"></i>
					    <p>Dock Motion</p>
				    </div>
                </div>
            </div>       	
		</section>      
    </div>
    )
}

export default Contacto;