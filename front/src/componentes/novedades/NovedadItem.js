import React from 'react';
import '../../../src/App.css';


const NovedadItem = (props) => {

    const { titulo, copete, cuerpo, imagen} = props

    return (
        <div className='novedades'>
            <h1>{titulo}</h1>
            <h2>{copete}</h2>
            <img src={imagen} alt = 'dale'/>
            <div dangerouslySetInnerHTML={{ __html: cuerpo}}></div>
        </div>
    )
}

export default NovedadItem;