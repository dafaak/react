import React, {Fragment, useState} from "react";

const Lista = () => {
    const [numeritos, setNumeritos] = useState([1, 2, 3, 4, 5])

    const agregarNumerito = () => {
        console.log('agregar numerito :V');
        setNumeritos([...numeritos, 6])
    }

    return (
        <Fragment>
            <h2>Lista de numeritos</h2>
            <button onClick={agregarNumerito}>Agregar</button>

            {
                numeritos.map(
                    (item, index) => {
                        return (
                            <li key={index}>
                                {index}-{item}
                            </li>
                        )
                    }
                )
            }

        </Fragment>
    );
}

export default Lista;