import { useState } from "react";
import "../styles/Cabecera.css";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className="navbar">
      {" "}
      <nav>
        {" "}
        <a href="#sobremi" onClick={closeMenu}>
          {" "}
          <img src={logo} alt="Logo personal" className="logo-img" />{" "}
        </a>{" "}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {" "}
          <span></span> <span></span> <span></span>{" "}
        </button>{" "}
        <ul className={menuOpen ? "menu-open" : ""}>
          {" "}
          <li>
            {" "}
            <a href="#sobremi" className="nav-link" onClick={closeMenu}>
              {" "}
              Sobre mí{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#proyectos" className="nav-link" onClick={closeMenu}>
              {" "}
              Proyectos{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#experiencia" className="nav-link" onClick={closeMenu}>
              {" "}
              Experiencia y Formación{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </header>
  );
}
