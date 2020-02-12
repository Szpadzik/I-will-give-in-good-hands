import React from "react";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";
import deco from "../assets/Decoration.svg"


function FourSteps() {
    return (
        <div>
            <div className="four_steps">
                <p>Wystarczą 4 proste kroki</p>
                <img src={deco}/>
            </div>

            <div className="four_icon_steps">

                <div className="icon">
                    <img src={icon1}/>
                    <h4>Wybierz rzeczy</h4>
                    <hr></hr>
                    <p>ubrania, zabawaki <br></br>
                        sprzęt i inne
                    </p>
                </div>

                <div className="icon">
                    <img src={icon2}/>
                    <h4>Spakuj je</h4>
                    <hr></hr>
                    <p>skorzystaj z <br></br>
                        worków na śmieci
                    </p>
                </div>

                <div className="icon">
                    <img src={icon3}/>
                    <h4>Zdecuduj komu
                        <br></br>
                        chcesz pomóc</h4>
                    <hr></hr>
                    <p>wybierz zaufane<br></br>
                        miejsce
                    </p>
                </div>

                <div className="icon">
                    <img src={icon4}/>
                    <h4>Zamów kuriera
                        <br></br>
                        chcesz pomóc</h4>
                    <hr></hr>
                    <p>kurier przyjedzie <br></br>
                        w dogodnym terminie
                    </p>
                </div>
            </div>
            <div className="steps_button">
                <button className="btn">ODDAJ RZECZY</button>
            </div>

        </div>
    );
}

export default FourSteps;