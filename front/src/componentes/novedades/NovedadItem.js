import React from 'react';
import '../../../src/App.css';


const NovedadItem = (props) => {

    const { titulo, copete, cuerpo, imagen} = props

    return (
        <div className='novedades'>
            <h1 className='justi'>{titulo}</h1>
            <img src={imagen} alt = 'dale'/>
            <h2 className='justi'>{copete}</h2>
            <div className='justi'  dangerouslySetInnerHTML={{ __html: cuerpo}}></div>
        </div>
    )
}

export default NovedadItem;