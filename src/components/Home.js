import React from "react";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";


function Home() {
    return (
        <>
            <Header />
            <ThreeColumns />
            <FourSteps />
            <AboutUs />
            <WhoWeHelp />
            <Contact />
            <Footer />
        </>

    );
}

export default Home;