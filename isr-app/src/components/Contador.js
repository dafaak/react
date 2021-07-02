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
            <button onClick={aumentar}> Aumentar Numerito</button>
        </Fragment>
    );
}
export default Contador;