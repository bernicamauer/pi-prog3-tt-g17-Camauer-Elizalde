import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-cajapadre">
            <h1>404</h1>
            <p>¿Dónde estás? ¡Volve al inicio!</p>
            <button><Link to="/">Inicio</Link></button>
            <img src="/img/imagenNotfound.png.jpg" alt="Not Found" />
        </div>
    );
};

export default NotFound;
