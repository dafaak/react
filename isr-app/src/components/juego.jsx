import React, {useState} from "react";
import {useParams} from 'react-router-dom'

export const Juego = () => {
    // console.log(useParams());

    const {id} = useParams();

    const [juego, setJuego] = useState({});

    React.useEffect(() => {
        const obtenerJuego = async () => {
            const response = await fetch('https://zelda-api.apius.cc/api/games/' + id);
            const games = await response.json();
            console.log('games:', games.data);
            setJuego(games.data);
        }
        obtenerJuego().then(console.log('jueguito consultado')
        );
    }, [id]);


    return (
        <div>
            <h3><b>{juego.name}</b></h3>
            <hr/>
            <p>{juego.description}</p>
            <hr/>
        </div>
    );
}