import {useState} from 'react'

const Contador = () => {

    const [numero, setNumero]=useState(0);
    const sumar=()=>setNumero(numero+1);
    const quitar=()=>setNumero(numero-1);
    
  return (
    <div className='d-flex justify-content-center'>
        <button type="button" className="btn btn-outline-secondary" onClick={quitar} disabled={numero<1}>-</button>
        <p className='text-center text-secondary text-size-4 m-2'>{numero}</p>
        <button type="button" className="btn btn-outline-secondary" onClick={sumar}>+</button>
    </div>
  )
}

export default Contador