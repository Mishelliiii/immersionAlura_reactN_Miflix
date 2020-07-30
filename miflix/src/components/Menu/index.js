import React from 'react';
import miFlixAlura from '../../assets/img/miFlixAlura.png'
import './Menu.css';
import Button from '../Button'
//import ButtonLink from '../components/ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/"> Show!
            <img className={miFlixAlura} alt="Logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo!
            </Button>
        </nav>
    );
}

export default Menu;