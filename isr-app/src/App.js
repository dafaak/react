import Contador from "./components/Contador";
import Lista from "./components/lista";
import {Formulario} from "./components/formulario";
import {ReactHookForm} from "./components/reactHookForm";
import {Ejemplo1} from "./components/ejemplo1";
import {Saludo} from "./components/saludo";
import {Comentario} from "./components/comentario";

function App() {
    const sujeto = {
        nombre: 'Juanito',
        url: 'https://64x64-pixel-image.thickkare.pw/img/e0a6e1ba100ab8ab4b40a3e2054ebd9d.png',
        texto: 'Cras sit amet nibh libero, in gravida nulla.'
    }
    return (
        <div className={"container"}>
            <h1>REACT XD</h1>
            <Saludo persona={'Israelito'}/>
            <Saludo persona={'Juanito'}/>
            <Comentario sujeto={sujeto}/>
            {/*<Ejemplo1>*/}
            {/*</Ejemplo1>*/}
            {/*<ReactHookForm>*/}
            {/*</ReactHookForm>*/}
            {/*<Formulario>*/}
            {/*</Formulario>*/}
            {/*<Contador>*/}
            {/*</Contador>*/}
            {/*<Lista>*/}
            {/*</Lista>*/}
        </div>
    );
}

export default App;
