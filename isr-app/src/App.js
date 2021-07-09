import {Fragment, useState} from "react";
import React from 'react';
import {TablaTareas} from "./components/tabla-tareas";

function App() {
    const tareas = [{nombre: 'jugar', estado: 'doing'}]
    return (
        <Fragment>
            <div className={'container'}>
                <h1>CRUD con HOOKS</h1>
                <hr/>
                <TablaTareas tareas={tareas}/>
            </div>
        </Fragment>
    );
}

export default App;
