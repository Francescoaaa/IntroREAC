import React from 'react'

const Buscador = () => {
  return (
    <div className='w-100 d-flex centerX certerY fondoSalmon'>
        <div className='fa-solid fa-location-dot'></div>
        <input className='w-100' type='text' placeholder='Buscar.....'/>
        <button className='fa fa-magnfying-glass cuadrado'></button>
    </div>
  )
}

export default Buscador