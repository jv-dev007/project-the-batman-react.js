import React from "react";
import './style.css';
import Card1 from '../../assets/brucewayne.jpg';
import Card2 from '../../assets/zoekravitz.jpg';
import Card3 from '../../assets/alfred.jpg';

function Cards() {
    return (
            <div className="cards-container">
                <div className="cards-content">
                    <div className="cards">
                        <img src={Card1} className="card" />
                        <div className="bg-name">
                            <p className="name-character">Bruce Wayne</p>
                        </div>
                    </div>
                    
                    <div className="cards">
                        <img src={Card2} className="card" />
                        <div className="bg-name">
                            <p className="name-character">Selina Kyle</p>
                        </div>
                    </div>
                    <div className="cards" >
                        <img src={Card3} className="card" />
                        <div className="bg-name">
                            <p className="name-character">Alfred Pennyworth</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Cards;