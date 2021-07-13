import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import {Personajes} from "./components/personajes";
import {Pueblos} from "./components/pueblos";
import {Juegos} from "./components/juegos";
import {Juego} from "./components/juego";

function App() {
    return (
        <Router>
            <div className={'container mt-5'}>
                <div className={'btn-group'}>
                    <NavLink to={'/'} className={'btn btn-dark active'} activeClassName={'active'}>
                        Juegos
                    </NavLink>
                    <Link to={'/pueblos'} className={'btn btn-dark'}>
                        Pueblos
                    </Link>
                </div>
                <hr/>
                <Switch>
                    <Route path={'/juego/:id'}>
                        <Juego>
                        </Juego>
                    </Route>
                    <Route path={'/pueblos'}>
                        <Pueblos>
                        </Pueblos>
                    </Route>
                    <Route path={'/'}>
                        <Juegos>
                        </Juegos>
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;
