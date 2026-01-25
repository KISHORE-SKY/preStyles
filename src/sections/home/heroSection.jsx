import { TbToolsOff } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";

import './homeHero.css'
import heroImage from "../../assets/4884785.jpg";
import { Link } from "react-router-dom";
import GoesTop from "../../assets/components/topButton/top.jsx"

function HomeSection() {
    return(
        <>
            <main>
                <section className="aboutSection">
                    <h1 className="title">Pigment UI</h1>
                    <div className="homeDescription">
                        <p>Elevate your design with Pigment UI, an all-in-one toolkit for crafting stunning visual elements. Instantly generate custom CSS for everything from vibrant gradients and palettes to modern Glassmorphism, buttons, and shadows.</p>
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
                <GoesTop />
            </main>
        </>
    );
}

export default HomeSection;
