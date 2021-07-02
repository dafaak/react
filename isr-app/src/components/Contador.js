import React, {Fragment, useState} from "react";

const Contador = () => {

    const [numerito, setNumerito] = useState(0);
    const aumentar = () => {
        console.log('me diste click :V')
        setNumerito(numerito + 1)
    }
    return (
        <Fragment>
            <h3>Pruebita Componente :V {numerito}</h3>
            <h4>frio o calor?</h4>
            <h4>{numerito > 13 ? 'Calor' : 'Frio'}</h4>
            <button onClick={aumentar}> Aumentar Numerito</button>
        </Fragment>
    );
}
export default Contador;