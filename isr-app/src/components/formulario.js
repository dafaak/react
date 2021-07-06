import React, {Fragment, useState} from "react";


export const Formulario = () => {
    const [datos, setDatos] = useState({nombre: "", edad: ""})
    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.edad);
    }
    return (
        <Fragment>
            <form className={"row"} onSubmit={enviarDatos}>
                <div className={"col-md-4"}>
                    <input type="text"
                           name={"nombre"}
                           placeholder={"Ingrese su nombre"}
                           className={"form-control"}
                           onChange={handleInputChange}
                    />
                </div>
                <div className={"col-md-3"}>
                    <input type="text"
                           name={"edad"}
                           placeholder={"Ingrese su edad"}
                           className={"form-control"}
                           onChange={handleInputChange}
                    />
                </div>
                <div className={"col-md-3"}>
                    <button className={"btn  btn-primary"} type={"submit"}> Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre}-{datos.edad}</h3>
        </Fragment>
    );
}