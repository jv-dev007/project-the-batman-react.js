import React from "react";
import './button.css'

function Button({ active, name, onclick}) {
    

    return (
        <div className="container-button">
            <button onClick={() => onclick(20)} className= {active ? "button" : "disabled"}>{name}</button>
            <span>Salvar informações</span>
        </div>
    )
}

export default Button 