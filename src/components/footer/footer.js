import React from "react";
import './style.css';
import Logo from '../../assets/OIP.jpg'

function Footer() {
    return (
        <footer className="footer">
            <img id="logo-footer" src={Logo}/>
            <p className="copyright" >Todos os direitos reservados©</p>
            <p className="desenvolvedor">Desenvolvido por João Vitor</p>
        </footer>
    )
}

export default Footer