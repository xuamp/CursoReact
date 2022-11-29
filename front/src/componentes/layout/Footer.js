
import '../../../src/App.css';


const Footer = (props) => {
    return (
        <footer className="pie">
		<img src='Image/Logo.jpg' alt='dale'></img>
		<div className="pie1">
			<h3>Dock Motion Argentina</h3>
			<div>
				<i className="fa-solid fa-envelope"></i>
				<p>Info@dockmotion.com</p>
			</div>
			<div>
				<i className="fa-solid fa-location-dot"></i>
				<p>Buenos Aires<br></br> Av. Corrientes 980, CABA<br></br> Argentina</p>
			</div>
			<div>
				<i className="fa-solid fa-phone"></i>
				<p>Whatsapp: +54 9 114401-8119</p>
			</div>
		</div>
		<div className="pie1">
			<h3>Dock Motion Miami</h3>
			<div>
				<p>7953/55 NW 64th Street<br></br>Miami FL, 33166</p>
			</div>
			<div>
				<p>+1 305 306 3125<br></br> info@mia-cargo.com</p>
			</div>
		</div>
		<div className="pie1">
			<h3>Dock Motion China</h3>
			<div>
				<p>仓库地址 东莞市寮步镇井巷村元九新村3巷6号<br></br>Phone 13532621034<br></br>Contact: Didi</p>
			</div>
		</div>
		<div className="pie2">
			<a href="https://www.instagram.com/dockmotion/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
			<a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
		</div>
	</footer>	
    )
}

export default Footer;