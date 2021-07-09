import React, {Fragment, useState} from 'react';
import {useForm} from "react-hook-form";

export const Ejemplo1 = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [datos, setDatos] = useState([]);
    const onSubmit = (data, e) => {
        console.log(data);
        setDatos(
            [
                ...datos,
                data
            ]
        )
        e.target.reset();// limpiar campos
    }
    return (
        <Fragment>
            <h1>
                ejemplo xD
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                           name={'titulo'}
                           placeholder={'Ingrese un titulo'}
                           className={'form-control my-2'}
                           {...register("titulo", {required: true, maxLength: 40, minLength: 4})}
                    />
                    <span className={"text-danger text-small d-block mb-2"}>
                    {errors.titulo?.type === "required" && "Título requerido"}
                        {errors.titulo?.type === "maxLength" && "Máximo 40 caracteres"}
                        {errors.titulo?.type === "minLength" && "Mínimo 4 caracteres"}
                </span>
                    <input type="text"
                           name={'descripcion'}
                           placeholder={'Ingrese una descripcion'}
                           className={'form-control my-2'}
                           {...register("descripcion", {required: true, maxLength: 100, minLength: 4})}
                    />
                    <span className={"text-danger text-small d-block mb-2"}>
                        {errors.descripcion?.type === "required" && "Descripcion requerido"}
                        {errors.descripcion?.type === "maxLength" && "Máximo 100 caracteres"}
                        {errors.descripcion?.type === "minLength" && "Mínimo 4 caracteres"}
                </span>
                    <button
                        className={'btn btn-primary'}
                    >
                        Enviar
                    </button>
                </form>
                <ul>
                    {
                        datos.map((item, index) =>
                            <li key={index}> {item.titulo + '-' + item.descripcion}</li>
                        )
                    }
                </ul>
            </h1>
        </Fragment>
    )
}