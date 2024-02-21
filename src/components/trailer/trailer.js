import React from "react";
import './style.css'
import Video from '../../assets/trailer.mp4'

function Trailer() {
    return (
        <div id="trailer-component">
            <div className="content">
                <video controls className="trailer">
                    <source src={Video}/>
                    Seu navegador não possui suporte para este video
                </video>

                <div className="sinopse">
                    <p className="description">
                        Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                        mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece 
                        como a personificação da vingança para a população.
                    </p>
                    <button className="button">Comprar ingresso</button>
                </div>
            </div>
        </div>
    ) 
}

export default Trailer