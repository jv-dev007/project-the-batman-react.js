import React, {  Suspense, lazy } from "react";
import Header from "../../components/header/header";
import './style.css'
import Trailer from "../../components/trailer/trailer";
import Footer from '../../components/footer/footer'
import Cards from "../../components/cards-home/cards";

function Home() {
    
    return (
        <>
            <Header />
            <div id="banner"></div>
            <Trailer />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;