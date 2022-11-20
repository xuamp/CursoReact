import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../componentes/novedades/NovedadItem'

const Novedades = (props) => {

    const  [ loading, setLoading  ] = useState(false);
    const  [ novedades, setNovedades ] = useState([]);

    useEffect( () => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false)
        };

        cargarNovedades ();
    }, [setLoading, setNovedades]);


    return (
        <div className='dinamico'>
            <h3> Novedades </h3>

            { loading ? (<p> Cargando .... </p>)
            : ( novedades.map( item => <NovedadItem key={item.id} titulo={item.Titulo} copete={item.Copete} imagen={item.imagen} cuerpo={item.Cuerpo} />))}
        </div>
    )
};


export default Novedades;