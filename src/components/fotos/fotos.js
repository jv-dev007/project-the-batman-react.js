import React from "react";
import './style.css'
import foto1 from '../../assets/personagem1.jpg'
import foto2 from '../../assets/personagem2.jpg'
import foto3 from '../../assets/personagem3.jpg'
import foto5 from '../../assets/personagem5.jpg'
import foto6 from '../../assets/personagem6.jpg'
import foto7 from '../../assets/personagem7.jpg'



function Fotos() {

    const album = [
        {foto: foto1, nome: 'Robert Pattinson' },
        {foto: foto2, nome: 'Jeffrey Wright' },
        {foto: foto3, nome: 'Andy Serkis' },
        {foto: foto5, nome: 'Collin Farrell' },
        {foto: foto6, nome: 'Selina Kyle' },
        {foto: foto7, nome: 'Paul Dano' },
    ]  
   
    return (
        <div className="elenco-container">
            <div className="elenco-content">
                    {album.map((item, index) => (
                        <div key={index} className="elenco-cards">
                            <img id="elenco-card" src={item.foto} />
                            <div className="elenco-bg-nome">
                                <p className="elenco-nome">{item.nome}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Fotos;