import React from "react";
import './footer.css';
import Logo from '../../assets/logo.jpg';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <div id="footer">
            <img id="logo" src={Logo} />
            <span>Todos os direitos reservados©</span>
            <span>Desenvolvido por Leo</span>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={{ textDecoration: 'none'}} to={'/'}>
                       <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to={'/contato'}> 
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to={'/fotos'}>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to={'/comentarios'}>
                        <li>Comentarios</li>
                    </Link>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Footer