import React from "react";
import deco from "../assets/Decoration.svg";


function WhoWeHelp() {
    return (
        <div className="container_helpers">

            <h2 className="title_helpers">Komu pomagamy?</h2>
            <img src={deco}/>
            <div className="button_helpers">
                <button className="btn_help">Fundacjom</button>
                <button className="btn_help">Organizacjom pozarządowym</button>
                <button className="btn_help">Lokalnym zbiórkom</button>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem dolorum, eius est illum
                in, inventore laborum maxime nostrum quas quibusdam quo voluptates? Aliquam aliquid culpa
            </p>
            <div className="name_helpers">
                <div className="institution">
                    <h4>Organizcja 1</h4>
                    <h5 className="addres_helpers">Egestas, sed, tempus.</h5>
                </div>
                <article>Quis varius quam quisque id diam vel quam elementum pulvinar.</article>
            </div>
            <div className="name_helpers">
                <div className="institution">
                    <h4>Organizcja 2</h4>
                    <h5 className="addres_helpers">Ut, aliquam, purus, sit, amet.</h5>
                </div>
                <article>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</article>
            </div>
            <div className="name_helpers">
                <div className="institution">
                    <h4>Organizcja 3</h4>
                    <h5 className="addres_helpers">Mi, quis, hendrerit, dolor.</h5>
                </div>
                <article>Scelerisque in dictum non consectetur a erat nam.</article>
            </div>
            <ul className="pagination">
                <li>
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
            </ul>

        </div>
    );
}

export default WhoWeHelp;