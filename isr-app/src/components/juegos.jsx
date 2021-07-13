import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Juegos = () => {

    const [juegos, setJuegos] = useState([]);
    React.useEffect(() => {
        obtenerJuegos().then(res => console.log('datos consultados!:V'))
    }, []);

    const obtenerJuegos = async () => {
        const response = await fetch('https://zelda-api.apius.cc/api/games?limit=5');
        const games = await response.json();
        console.log('games:', games.data);
        setJuegos(games.data);
    }

    return (
        <div>
            <h1>Juegos</h1>
            <ul>
                {juegos.map((item, index) =>
                    <li key={item._id}>
                        <Link to={`/juego/${item._id}`}>
                            <b>{item.name}</b> - {item.released_date}
                        </Link>
                        {/*<br/>*/}
                        {/*{item.description}*/}
                        <hr/>
                    </li>
                )}
            </ul>
        </div>

    )
}