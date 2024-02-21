import React from "react";
import './style.css'


function Coments() {
    return (
        <div className="coments-container">
            <div className="coments-content">
                <div className="comentario">
                    <h2 style={{margin:'12px'}}>user 1 ⭐⭐⭐⭐⭐</h2>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, sed, inventore minima possimus quos exercitationem nesciunt ratione dolore eum nihil similique! Eligendi molestiae mollitia quas odio facere vel sunt suscipit?</span>
                </div>

                <div className="comentario">
                    <h2 style={{margin:'12px'}}>user 2 ⭐⭐⭐⭐⭐</h2>
                  
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, sed, inventore minima possimus quos exercitationem nesciunt ratione dolore eum nihil similique! Eligendi molestiae mollitia quas odio facere vel sunt suscipit?</span>
                </div>

                <div className="comentario">
                    <h2 style={{margin:'12px'}}>user 3 ⭐⭐⭐⭐⭐</h2>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, sed, inventore minima possimus quos exercitationem nesciunt ratione dolore eum nihil similique! Eligendi molestiae mollitia quas odio facere vel sunt suscipit?</span>
                </div>
            </div>
        </div>
    )
}

export default Coments