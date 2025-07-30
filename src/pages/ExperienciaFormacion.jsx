import React from "react";
import { motion } from "framer-motion";
import "../styles/ExperienciaFormacion.css";
import { experience } from "../data/Experiencia";
import { formacion } from "../data/Formacion";
import { formacionComp } from "../data/FormacionComp";

const Experiencia = () => {
  // Dividimos el array formacionComp en dos mitades
  const midIndex = Math.ceil(formacionComp.length / 2);
  const leftItems = formacionComp.slice(0, midIndex);
  const rightItems = formacionComp.slice(midIndex);

  return (
    <div className="experiencia-wrapper">
      <div className="timeline-container">
        {/* EXPERIENCIA */}
        <div className="timeline-column">
          <motion.h2
            className="titulo left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experiencia
          </motion.h2>
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p className="fecha">{item.date}</p>
                  {item.company && <em>{item.company}</em>}
                  <p style={{ whiteSpace: "pre-line" }}>{item.description}</p>
                  {item.tech && (
                    <ul className="tech-list">
                      {item.tech.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FORMACION */}
        <div className="timeline-column">
          <motion.h2
            className="titulo right"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Formación
          </motion.h2>
          <div className="timeline">
            {formacion.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <p className="fecha">{item.date}</p>
                  {item.institution && <em>{item.institution}</em>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FORMACION COMPLEMENTARIA CENTRADA */}
      <div className="formacion-complementaria-wrapper">
        <motion.h2
          className="titulo centered"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Formación Complementaria
        </motion.h2>

        <div className="two-column-timeline">
          <div className="timeline centered-timeline">
            {leftItems.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <p className="fecha">{item.date}</p>
                  {item.institution && <em>{item.institution}</em>}
                  {item.description && (
                    <p style={{ whiteSpace: "pre-line" }}>{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="timeline centered-timeline">
            {rightItems.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={index + midIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <p className="fecha">{item.date}</p>
                  {item.institution && <em>{item.institution}</em>}
                  {item.description && (
                    <p style={{ whiteSpace: "pre-line" }}>{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
