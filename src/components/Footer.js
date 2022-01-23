import { Link } from "react-router-dom";
import LogoGitHub from "../assets/logo-github.png";
import LogoInstagram from "../assets/logo instagram negro 1.png";
import LogoFacebook from "../assets/logo facebook negro 4.png";
import LogoLinkedin from "../assets/logo-linkedin.png";

function Footer() {
  return (
    
      <div className="containerFooter">
        <div className="containerLogos">
          <a href="https://github.com/steve-ux" target="_blank"><img src={LogoGitHub} width="32" className="logoGit" /></a>
          <a href="https://www.instagram.com/esteban_instaok/" target="_blank"><img src={LogoInstagram} width="33" className="logoIg" /></a>
          <a href="https://www.facebook.com/Esteban.Maldonado.Oficial/" target="_blank"><img src={LogoFacebook} width="30" className="logoFb" /></a>
          <a href="https://www.linkedin.com/in/estebanok/" target="_blank"><img src={LogoLinkedin} width="29" className="logoLinkedin" /></a>
        </div>
        <div className="epig2">
          <span className="epigrafe">| <Link to="/" className="esteban">Esteban</Link> 2022</span>
        </div>
      </div>
  );
}

export default Footer;