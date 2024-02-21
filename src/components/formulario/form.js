import React from "react";
import './style.css'

function Form() {
    return (
        <div className="form-container">
            <div className="form-content">
                <form>
                <label>Nome:</label>
                <input type="text" name="name"></input>

                <label>Email:</label>
                <input type="email" name="Email" placeholder="Digite um email válido"></input>

                <label>Fale conosco:</label>
                <textarea type="mensagen" rows="10" name="mensagen" placeholder="Algum problema com a compra de ingresso ou dúvida sobre algo? Nos envie uma mensagem."></textarea>

                </form>
                <button className="button-contato">ENVIAR</button>
            </div>
        </div>
    )
}

export default Form