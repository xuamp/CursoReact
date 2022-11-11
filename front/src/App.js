
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componentes/layout/Footer';
import Header from './componentes/layout/Header';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Servicios1 from './pages/Servicios1';
import Servicios2 from './pages/Servicios2';
import Servicios3 from './pages/Servicios3';
import Servicios4 from './pages/Servicios4';
import Servicios5 from './pages/Servicios5';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Nosotros" element={<Nosotros />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="Servicios" element={<Servicios/>} />
            <Route path="Servicios1" element={<Servicios1/>} />
            <Route path="Servicios2" element={<Servicios2/>} />
            <Route path="Servicios3" element={<Servicios3/>} />
            <Route path="Servicios4" element={<Servicios4/>} />
            <Route path="Servicios5" element={<Servicios5/>} />




          
            

        </Routes>
        <Footer />
        </BrowserRouter> 
    </div>
  );
}

export default App;
