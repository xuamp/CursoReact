
import '../../src/App.css'
import { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {

	const initialForm = {
		nombre: '',
		empresa: '',
		direccion: '',
		telefono: '',
		celular: '',
		mail: '',
		ciudad: '',
		pais: '',
		mensaje: ''
	}

	const [sending, setSending] = useState (false);
	const [msg, setMsg] = useState ('');
	const [formData, setFormData] = useState(initialForm);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(oldData => ({
			...oldData,
			[name]: value
		}));
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setMsg('');
		setSending(true);
		const response = await axios.post('http://localhost:3000/api/contacto', formData);
		setSending(false);
		setMsg(response.data.message);
		if (response.data.error === false) {
			setFormData(initialForm)
		}
	}


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
					    <form action='/contacto' method='post' onSubmit={handleSubmit}>
						    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre..."></input>
						    <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Empresa..."></input>
						    <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Direccion..."></input>
						    <input type="number" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Telefono..."></input>
						    <input type="number" name="celular" value={formData.celular} onChange={handleChange} placeholder="Celular..."></input>
						    <input type="email" name="mail" value={formData.mail} onChange={handleChange} placeholder="Direccion de Mail..."></input>
						    <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} placeholder="Ciudad..."></input>
						    <input type="text" name="pais" value={formData.pais} onChange={handleChange} placeholder="Pais..."></input>
						    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Mensaje"></textarea>
						    <button className="enviar2">enviar</button>					
					    </form>
						{sending ? <p className='noti'>Enviando ...</p> : null}
						{msg ? <p className='noti'>{msg}</p> : null}
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