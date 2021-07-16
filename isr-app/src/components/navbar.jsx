import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import {auth} from "../firebase";

const Navbar = (props) => {

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/login')
            })
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link  className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className={'btn btn-block'}
                                to="/"
                                exact
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {
                                props.firebaseUser !== null ? (
                                    <NavLink
                                        className={'btn btn-block'}
                                        to="/admin"
                                    >
                                        Admin
                                    </NavLink>
                                ) : null
                            }
                        </li>
                        <li className="nav-item">

                            {
                                props.firebaseUser !== null ? (
                                    <NavLink
                                        className={'btn btn-block'}
                                        to="/examenes"
                                    >
                                        Exámenes
                                    </NavLink>
                                ) : null
                            }
                        </li>
                        <li className={'nav-item'}>
                            {
                                props.firebaseUser !== null ? (
                                    <button className={'btn btn-block'}
                                        onClick={() => cerrarSesion()}
                                    >
                                        Cerrar Sesión
                                    </button>
                                ) : (
                                    <NavLink
                                        className={'btn btn-block'}
                                        to="/login"
                                    >
                                        Sign in/up
                                    </NavLink>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)