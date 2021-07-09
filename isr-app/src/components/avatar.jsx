import React, {Fragment} from "react";

export const Avatar = (props) => {
    return (
        <Fragment>
            <img className="mr-3" src={props.imagenURL} height={'64px'} width={'64px'}/>
        </Fragment>
    );
}