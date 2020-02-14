import React from "react";
import deco from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import people from "../assets/People.jpg";

function AboutUs() {
    return (
        <div className="about_us">

            <div className="meet_us">
                <h3>O nas</h3>
                <img src={deco} />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato
                    quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} />

            </div>
            <div className="photo_of_us">
                <img src={people} />
            </div>

        </div>
    );
}

export default AboutUs;