import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/parizottoflix.png';
import ButtonLink from '../ButtonLink';
import './Menu.css';

function Menu() {
    return (

        <nav className="Menu">

            <Link to="/">
                <img className="Logo" src={Logo} alt="ParizottoFlix Logo" />
            </Link>

            <ButtonLink className="ButtonLink" href="/cadastro/video">
                Novo Vídeo
            </ButtonLink>

        </nav>

    );
}

export default Menu; 