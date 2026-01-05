import './contactSection.css'
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import {Link} from "react-router-dom"

function FooterSection() {
    return(
        <>
            <footer>
                <div>
                    <h2 className='footerlogo'>PreStyles</h2>
                </div>

                <div className='footerLinks'>
                    <div>
                        <h4>Colors &</h4>
                        <h4>Backgrounds</h4>
                    </div>
                    <p><Link to='/color' className='footerLink'>Color Picker</Link></p>
                    <p><Link to="linearGradient" className='footerLink'>Linear-Gradient</Link></p>
                    <p><Link to="/radiel" className='footerLink'>Radial-Gradient</Link> </p>
                    <p><Link to='glassbg' className='footerLink'>Glass-Morphism</Link></p>
                    <p><Link to="/boxShadow" className='footerLink'>Box-Shadow</Link></p>
                </div>

                <div className='footerLinks'>
                    <h4>UI Components</h4>
                    <p><Link className='footerLink' to="button">Buttons</Link></p>
                    <p><Link to="/formui" className='footerLink'>Forms</Link></p>
                </div>

                <div className='footerLinks'>
                    <h4>Contact</h4>
                    <div className='socialMedia'>
                        <MdAttachEmail />
                        <p><a href='mailto:skkishore1273@gmail.com' className='footerLink'>Email</a></p>
                    </div>
                    
                    <div className='socialMedia'>
                        <FaLinkedin />
                        <p><a href='https://www.linkedin.com/in/kishore017/' className='footerLink'>Linkedin</a> </p>  
                    </div>
                    
                    <div className='socialMedia'>
                        <FaGithub />
                        <p><a href='https://github.com/KISHORE-SKY/' className='footerLink'>Github</a></p>    
                    </div>
                    
                    <div className='socialMedia'>
                        <SiNetlify />
                        <p><a href='https://app.netlify.com/teams/skkishore1273/projects' className='footerLink'>Netlify</a></p>    
                    </div>
                    
                </div>
            </footer>
        </>
    );
}

export default FooterSection;