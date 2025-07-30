import "../styles/Pie.css";
import logo from "../assets/logo.png";
import githubIcon from "../assets/software/github.png";
import linkedinIcon from "../assets/otros/linkedin.png";
import itchIcon from "../assets/otros/itchio.png";

function Footer() {
  return (
    <footer className="footer">
      <a href="#sobremi">
        <img src={logo} alt="Logo Rubén Fernández" className="footer-logo" />
      </a>
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/rubferpae/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a
          href="https://github.com/rferpae569"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="" className="social-icon invert" />
        </a>
        <a
          href="https://fdzgames.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={itchIcon} alt="Itch.io" className="social-icon" />
        </a>
      </div>

      <a href="CV-Ruben-Fernandez.pdf" download className="footer-button">
        Descargar CV
      </a>
    </footer>
  );
}

export default Footer;
