import "../styles/Cabecera.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="flex items-center justify-between p-4">
        <a href="#sobremi">
          <img src={logo} alt="Logo personal" className="logo-img" />
        </a>
        <ul className="flex flex-wrap items-center gap-6 text-base font-medium">
          <li>
            <a href="#sobremi" className="nav-link">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos" className="nav-link">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#experiencia" className="nav-link">
              Experiencia y Formación
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
