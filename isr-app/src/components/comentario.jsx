import React, {Fragment} from "react";
import {Avatar} from "./avatar";

export const Comentario = ({sujeto}) => {
    return (
        <Fragment>

            <div className="media">
                {/*<img className="mr-3" src={sujeto.url} height={'64px'} width={'64px'}/>*/}
                <Avatar imagenURL={sujeto.url}/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>

        </Fragment>
    );
}