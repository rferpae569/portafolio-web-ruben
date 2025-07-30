import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { webProjects } from "../data/ProyectosWeb";
import { gameProjects } from "../data/ProyectosGames";
import "../styles/Proyectos.css";

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

const Proyectos = () => {
  const [openIndex, setOpenIndex] = useState({ type: null, index: null });

  const toggleDetails = (type, index) => {
    setOpenIndex(
      openIndex.type === type && openIndex.index === index
        ? { type: null, index: null }
        : { type, index }
    );
  };

  const renderProjectCards = (projects, type) =>
    projects.map((project, index) => (
      <motion.div
        className="card"
        key={index}
        {...cardAnim(index)}
        whileHover={{ y: -4, transition: { duration: 0.15, ease: "easeOut" } }}
      >
        <img src={project.image} alt={project.title} className="card-image" />
        <div className="card-content">
          <h2>{project.title}</h2>
          <button
            className="toggle-button"
            onClick={() => toggleDetails(type, index)}
          >
            {openIndex.type === type && openIndex.index === index
              ? "Ocultar detalles"
              : "Mostrar detalles"}
          </button>
          <AnimatePresence>
            {openIndex.type === type && openIndex.index === index && (
              <motion.div
                className="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p>
                  <strong>Fecha:</strong> {project.date}
                </p>
                <p>
                  <strong>Descripción:</strong> {project.description}
                </p>
                <div className="tech-icons">
                  <strong>Tecnologías:</strong>
                  <div className="tech-list">
                    {project.tech.map((t, i) => (
                      <img
                        key={i}
                        src={t.icon}
                        alt={t.name}
                        title={t.name}
                        className="tech-icon"
                      />
                    ))}
                  </div>
                </div>
                <p>
                  <strong>Demo:</strong>{" "}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver demo
                  </a>
                </p>
                <p>
                  <strong>Repositorio:</strong>{" "}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    ));

  return (
    <div className="proyectos-wrapper">
      <motion.section {...fadeUp}>
        <motion.h1 className="section-title" {...fadeUp}>
          Proyectos Web
        </motion.h1>
        <div className="proyectos-container">
          {renderProjectCards(webProjects, "web")}
        </div>
      </motion.section>

      <motion.section {...fadeUp}>
        <motion.h1 className="section-title" {...fadeUp}>
          Proyectos de Videojuegos
        </motion.h1>
        <div className="proyectos-container">
          {renderProjectCards(gameProjects, "game")}
        </div>
      </motion.section>
    </div>
  );
};

export default Proyectos;
