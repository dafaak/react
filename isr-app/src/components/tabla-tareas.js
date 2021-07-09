import React, {Fragment, useState} from "react";
import {useForm} from "react-hook-form";

export const TablaTareas = (props) => {
    const [tareas, setTareas] = useState(props.tareas);
    let [mostrarForm, setMostrarForm] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const cambiarMostrarForm = () => {
        setMostrarForm(
            mostrarForm = !mostrarForm
        )
    }
    const agregarTarea = (tarea) => {
        setTareas(
            [
                ...tareas,
                tarea
            ]
        )

    }
    const onSubmit = (data) => {
        agregarTarea(data);
        cambiarMostrarForm();
    }
    return (
        <Fragment>

            <table className={'table  table-dark'}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Estado</th>
                </tr>
                </thead>
                <tbody>
                {tareas.map((item, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item.nombre}</td>
                        <td>{item.estado}</td>
                    </tr>
                )}

                </tbody>
            </table>
            <button className={'btn btn-block btn-outline-dark mb-1'} hidden={mostrarForm} onClick={cambiarMostrarForm}>
                AGREGAR
            </button>
            <div hidden={!mostrarForm} className={'mb-2'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className={"form-control my-2"}
                        type="text"
                        placeholder={'Ingrese la descripcionde la tarea'}
                        name={'nombre'}
                        {...register('nombre', {required: true, minLength: 4, maxLength: 50})}
                    />
                    <span className={"text-danger text-small d-block mb-2"}>
                    {errors.nombre?.type === "required" && "Descripción requerida!"}
                        {errors.nombre?.type === "maxLength" && "Máximo 50 caracteres"}
                        {errors.nombre?.type === "minLength" && "Mínimo 4 caracteres"}
                </span>
                    <select className={'custom-select'} {...register("estado", {required: true})}>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                        <option value="pending">Pending</option>
                    </select>
                    <span className={"text-danger text-small d-block mb-2"}>
                    {errors.estado?.type === "required" && "Descripciòn requerida!"}
                </span>
                    <button className={'btn btn-block btn-outline-dark'} type={'submit'}>CREAR</button>
                </form>

            </div>
        </Fragment>
    )
}