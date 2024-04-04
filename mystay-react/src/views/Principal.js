import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const Principal = () => {
    return (
        <div>
            <div id='iconosPrincipal'>
                <Link to='/perfil' >
                    <div>
                        <img src='../icono_perfil.jpg' alt='PERFIL' className='iconoMenuPrincipal' />
                        <p>Perfil</p>
                    </div>
                </Link>
                <Link to='/reservas' >
                    <div>
                        <img src='../icono_calendario.png' alt='RESERVAS' className='iconoMenuPrincipal' />
                        <p>Reservas</p>
                    </div>
                </Link>
                <Link to='/habitacion' >
                    <div>
                        <img src='../icono_habitacion.png' alt='HABITACION' className='iconoMenuPrincipal' />
                        <p>Habitación</p>
                    </div>
                </Link>
                <Link to='/transporte' >
                    <div>
                        <img src='../icono_transporte.png' alt='TRANSPORTE' className='iconoMenuPrincipal' />
                        <p>Transporte</p>
                    </div>
                </Link>
            </div>
            <Link to='/login'><Button>Logout</Button></Link>
        </div>
    )
}
