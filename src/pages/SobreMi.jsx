import { motion } from "framer-motion";
import "../styles/Sobremi.css";
import htmlLogo from "../assets/lenguajes/html.png";
import cssLogo from "../assets/lenguajes/css.png";
import jsLogo from "../assets/lenguajes/javascript.png";
import typeLogo from "../assets/lenguajes/typescript.png";
import phpLogo from "../assets/lenguajes/php.png";
import pythonLogo from "../assets/lenguajes/python.png";
import javaLogo from "../assets/lenguajes/java.png";
import mysqlLogo from "../assets/lenguajes/mySql.png";
import csharpLogo from "../assets/lenguajes/cSharp.png";
import oracleLogo from "../assets/lenguajes/oracleSQL.png";
import angularLogo from "../assets/frameworks/angular.png";
import reactLogo from "../assets/frameworks/react.png";
import boostrapLogo from "../assets/frameworks/boostrap.png";
import phpAdminLogo from "../assets/software/phpmyadmin.png";
import githubLogo from "../assets/software/github.png";
import gitLogo from "../assets/software/Git.png";
import wordpressLogo from "../assets/software/wordpress.png";
import visualStudioLogo from "../assets/software/visualStudio.png";
import vsCodeLogo from "../assets/software/mVisualStudioCode.png";
import unityLogo from "../assets/software/unity.png";
import illustratorLogo from "../assets/sistemadiseno/illustrator.png";
import figmaLogo from "../assets/sistemadiseno/figma.png";
import virtualboxLogo from "../assets/sistemadiseno/virtualbox.png";
import vmwareLogo from "../assets/sistemadiseno/vmware.png";
import windowsLogo from "../assets/sistemadiseno/windows.png";
import linuxLogo from "../assets/sistemadiseno/linux.png";

function SobreMi() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.0 },
  };

  const cardAnim = (i) => ({
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { delay: i * 0.05, duration: 1.0 },
    viewport: { once: true },
  });

  return (
    <section className="sobremi-section">
      <div className="sobremi-content" {...fadeUp}>
        <motion.h1 {...fadeUp}>Sobre mí</motion.h1>

        <motion.p {...fadeUp}>
          Hola, soy <span className="text-sky">Rubén Fernández</span>,{" "}
          <span className="font-medium">
            Desarrollador Frontend y Especialista WordPress
          </span>{" "}
          con una sólida base en{" "}
          <span className="font-medium">
            Sistemas Microinformáticos y Redes
          </span>
          . Me apasiona la tecnología y disfruto creando sitios modernos,
          funcionales y de alto rendimiento.
        </motion.p>

        <motion.p {...fadeUp}>
          Combino el desarrollo con frameworks modernos como{" "}
          <span className="font-medium">React</span> y el despliegue ágil en
          entornos <span className="font-medium">WordPress</span>, ofreciendo
          soluciones tecnológicas integrales y de alta calidad. Me define una
          mentalidad <span className="font-medium">proactiva</span>,
          perseverante ante desafíos complejos y comprometida con el{" "}
          <span className="font-semibold">crecimiento continuo</span>.
        </motion.p>

        {/* Lenguajes */}
        <motion.h2 {...fadeUp}>Lenguajes</motion.h2>
        <div className="skill-grid">
          {[
            { name: "JavaScript", logo: jsLogo },
            { name: "TypeScript", logo: typeLogo },
            { name: "PHP", logo: phpLogo },
            { name: "HTML", logo: htmlLogo },
            { name: "CSS", logo: cssLogo },
            { name: "MySQL", logo: mysqlLogo },
            { name: "Oracle SQL", logo: oracleLogo },
            { name: "Python", logo: pythonLogo },
            { name: "Java", logo: javaLogo },
            { name: "C#", logo: csharpLogo },
          ].map(({ name, logo }, i) => (
            <motion.div
              className="skill-card"
              key={name}
              {...cardAnim(i)}
              whileHover={{
                y: -4,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
              {" "}
              <img src={logo} alt={name} />
              <span>{name}</span>
            </motion.div>
          ))}
        </div>

        {/* Frameworks */}
        <motion.h2 {...fadeUp}>Frameworks</motion.h2>
        <div className="skill-grid">
          {[reactLogo, angularLogo, boostrapLogo].map((logo, i) => {
            const names = ["React", "Angular", "Bootstrap"];
            return (
              <motion.div
                className="skill-card"
                key={name}
                {...cardAnim(i)}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
              >
                {" "}
                <img src={logo} alt={names[i]} />
                <span>{names[i]}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Software de Programación */}
        <motion.h2 {...fadeUp}>Software de Programación</motion.h2>
        <div className="skill-grid">
          {[
            { name: "WordPress", logo: wordpressLogo },
            { name: "Git", logo: gitLogo },
            { name: "GitHub", logo: githubLogo },
            { name: "VS Code", logo: vsCodeLogo },
            { name: "Visual Studio", logo: visualStudioLogo },
            { name: "phpMyAdmin", logo: phpAdminLogo },
          ].map(({ name, logo }, i) => (
            <motion.div
              className="skill-card"
              key={name}
              {...cardAnim(i)}
              whileHover={{
                y: -4,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
              {" "}
              <img src={logo} alt={name} />
              <span>{name}</span>
            </motion.div>
          ))}
        </div>

        {/* Otros Software */}
        <motion.h2 {...fadeUp}>Sistemas y diseño</motion.h2>
        <div className="skill-grid">
          {[
            { name: "Figma", logo: figmaLogo },
            { name: "Adobe Illustrator", logo: illustratorLogo },
            { name: "VirtualBox", logo: virtualboxLogo },
            { name: "VmWare", logo: vmwareLogo },
            { name: "Windows", logo: windowsLogo },
            { name: "Linux", logo: linuxLogo },
          ].map(({ name, logo }, i) => (
            <motion.div
              className="skill-card"
              key={name}
              {...cardAnim(i)}
              whileHover={{
                y: -4,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
              {" "}
              <img src={logo} alt={name} />
              <span>{name}</span>
            </motion.div>
          ))}
        </div>

        {/* Videojuegos */}
        <motion.h2 {...fadeUp}>Videojuegos</motion.h2>
        <motion.p {...fadeUp}>
          También tengo formación en desarrollo de videojuegos utilizando{" "}
          <span className="text-sky">Unity</span> y el lenguaje{" "}
          <span className="text-sky">C#</span>. He trabajado en proyectos con
          lógica de juego, físicas, UI y mecánicas.
        </motion.p>
        <div className="skill-grid">
          {[
            { name: "Unity", logo: unityLogo },
            { name: "C#", logo: csharpLogo },
          ].map(({ name, logo }, i) => (
            <motion.div
              className="skill-card"
              key={name}
              {...cardAnim(i)}
              whileHover={{
                y: -4,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
              {" "}
              <img src={logo} alt={name} />
              <span>{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
