import errorImage from "../../assets/9020.jpg";
import "./error.css";
import {Link} from "react-router-dom";
import FooterSection from '../../sections/footer/contact';
import Navbar from '../../sections/navbar/navbarSection';

function ErrorElemet() {
    return(
        <>
            <section>
                <div>
                    <Navbar />
                </div>
                <section className="errorPageContent">
                    <div className="errorPageMessageBox">
                        <h1>Ooops!</h1>
                        <div>
                            <p>Something wrong here...</p>
                            <p>kindly go back home then explore tools.</p>
                        </div>
                        <button className="errorPageButton"><Link to="/" className="homeButtonError">Back to Home</Link></button>
                        </div>
                        <div className="pictureBoxError">
                            <img src={errorImage} className="errorPicture"/>
                        </div>
                </section>
                <div>
                    <FooterSection />
                </div>
            </section>
            
        </>
    );
}

export default ErrorElemet;
