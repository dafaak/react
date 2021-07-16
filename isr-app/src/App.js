import {firebase} from "./firebase";
import {useEffect, useState} from "react";

function App() {
    // useEffect(() => {
    //
    //     const obtenerDatos = async () => {
    //         const db = firebase.firestore()
    //         try {
    //             const data = await db.collection('tareas').get()
    //             const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
    //             console.log(arrayData)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     obtenerDatos().then(console.log('datitos consultados'));
    //
    // }, [])
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState('');
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('');
    const db = firebase.firestore();

    useEffect(() => {

        const obtenerDatos = async () => {
            const db = firebase.firestore()
            try {
                const data = await db.collection('tareas').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(arrayData)
                setTareas(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos().then(res => {
            console.log('datos oki!')
        })
        const obtenerDatosPacientes = async () => {
            const db = firebase.firestore()
            try {
                const data = await db.collection('pacientes').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))

                console.log('Pacientes:', arrayData)
                // setTareas(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatosPacientes().then(
            res => {
                console.log('datos pacientes cargados')
            }
        )


    }, [])

    const agregar = async (e) => {
        e.preventDefault()
        if (!tarea.trim()) {
            console.log('sin texto')
            return
        } else {
            try {
                const nuevaTarea = {
                    name: tarea,
                    fecha: Date.now()
                }
                const data = await db.collection('tareas').add({
                    name: tarea,
                    fecha: Date.now()
                })
                setTareas([
                    ...tareas,
                    {id: data.id, ...nuevaTarea}
                ])
                setTarea('')
            } catch (error) {
                console.log(error)
            }
        }
    }
    const eliminarTarea = async (id) => {
        try {
            await db.collection('tareas').doc(id).delete();
            const arrayFiltrado = tareas.filter(item => item.id !== id);
            setTareas(arrayFiltrado);
        } catch (e) {
            console.error(e)
        }
    }
    const activarEdicion = (item) => {
        setModoEdicion(true)
        setTarea(item.name)
        setId(item.id)
    }

    const editar = async (e) => {
        e.preventDefault()
        if (!tarea.trim()) {
            console.log('vacio')
            return
        }
        try {
            const db = firebase.firestore()
            await db.collection('tareas').doc(id).update({
                name: tarea
            })
            const arrayEditado = tareas.map(item => (
                item.id === id ? {id: item.id, fecha: item.fecha, name: tarea} : item
            ))
            setTareas(arrayEditado)
            setModoEdicion(false)
            setId('')
            setTarea('')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container mb-2">
            <div className="row">
                <div className="col-md-6">
                    <h3>Lista de Tareas</h3>
                    <ul className="list-group">
                        {
                            tareas.map(item => (
                                <li className="list-group-item" key={item.id}>
                                    <span>{item.name}</span>
                                    <button onClick={() => eliminarTarea(item.id)}
                                            className="btn btn-danger btn-sm float-right"
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        className="btn btn-warning btn-sm float-right mr-2"
                                        onClick={() => activarEdicion(item)}
                                    >
                                        Editar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>
                        {
                            modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
                        }
                    </h3>
                    <form onSubmit={modoEdicion ? editar : agregar}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder='Ingrese Tarea'
                            value={tarea}
                            onChange={e => setTarea(e.target.value)}
                        />
                        <button
                            type='submit'
                            className={
                                modoEdicion ? 'btn btn-warning btn-block btn-sm' :
                                    'btn btn-dark btn-block btn-sm'
                            }
                        >
                            {
                                modoEdicion ? 'Editar' : 'Agregar'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
