import errorImage from "../../assets/9020.jpg";
import "./error.css";
import {Link} from "react-router-dom";

function ErrorElemet() {
    return(
        <>
            <section className="errorPageContent">
                <div className="errorPageMessageBox">
                    <h1>Ooops!</h1>
                    <div>
                        <p>Something wrong here...</p>
                        <p>kindly go back home then click explore tools button.</p>
                    </div>
                    <button className="errorPageButton"><Link to="/" className="homeButtonError">Go Back Home</Link></button>
                </div>
                <div className="pictureBoxError">
                    <img src={errorImage} className="errorPicture"/>
                </div>
                
            </section>
        </>
    );
}

export default ErrorElemet;
