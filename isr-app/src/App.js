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
import {Inicio} from "./components/inicio";

function App() {
    return (
        <Router>
            <div className={'container mt-5'}>
                <div className={'btn-group'}>
                    <NavLink to={'/'} className={'btn btn-dark active'} activeClassName={'active'}>
                        Inicio
                    </NavLink>
                    <Link to={'/pueblos'} className={'btn btn-dark'}>
                        Pueblos
                    </Link>
                    <Link to={'/personajes'} className={'btn btn-dark'}>
                        Personajes
                    </Link>
                </div>
                <hr/>
                <Switch>
                    <Route path={'/personajes'}>
                        <Personajes>
                        </Personajes>
                    </Route>
                    <Route path={'/pueblos'}>
                        <Pueblos>
                        </Pueblos>
                    </Route>
                    <Route path={'/'}>
                        <Inicio>
                        </Inicio>
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;
