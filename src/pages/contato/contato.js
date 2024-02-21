import React from "react";
import Header from "../../components/header/header";
import Form from "../../components/formulario/form";
import './style.css'
import Footer from "../../components/footer/footer";

function Contato() {
    return (
        <>
            <Header />
            <div id="banner">
            <Form />
            </div>
            <Footer />
        </>
    )
}

export default Contato;