import { TbToolsOff } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";

import './homeHero.css'
import heroImage from "../../assets/4884785.jpg";
import { Link } from "react-router-dom";

function HomeSection() {
    return(
        <>
            <main>
                <section className="aboutSection">
                    <h1 className="title">PreStyles</h1>
                    <div className="homeDescription">
                        <p>Discover ready-made UI styles and design tools in one place.
                           Build faster with customizable components and modern effects.</p>
                    </div>
                    <div className="exploreButton">
                        <TbToolsOff className="exploreIcons"/>
                        <button className="explore"><Link to='/color' className="exploreLink">Explore Tools</Link></button>
                        <FaArrowRight className="exploreIcons"/>
                    </div>
                </section>

                <section className="imageSection">
                    <img src={heroImage} className="heroSectionImage" alt="coder image"/>
                </section>
            </main>
        </>
    );
}

export default HomeSection;
