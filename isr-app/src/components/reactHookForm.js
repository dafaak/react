import React, {Fragment} from "react";
import {useForm} from "react-hook-form";

export const ReactHookForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Fragment>
            react hook form
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={"form-control my-2"}
                    placeholder={"Ingrese el título"}
                    type="text"
                    {...register("titulo", {required: true, maxLength: 10})}
                />
                <span className={"text-danger text-small d-block mb-2"}>
                    {errors.titulo?.type === "required" && "Título requerido"}
                    {errors.titulo?.type === "maxLength" && "Máximo 10 caracteres"}
                </span>
                <button type={"submit"} className={"btn btn-primary"}>
                    Enviar
                </button>
            </form>
        </Fragment>
    );
}