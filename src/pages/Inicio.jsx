import SobreMi from "./SobreMi";
import Proyectos from "./Proyectos";
import ExperienciaFormacion from "./ExperienciaFormacion";

function Inicio() {
  return (
    <div className="p-4">
      <section id="sobremi" className="scroll-mt-[180px] max-[767px]:scroll-mt-[80px]">
        <SobreMi />
      </section>

      <section id="proyectos" className="scroll-mt-[180px] max-[767px]:scroll-mt-[80px]">
        <Proyectos />
      </section>

      <section id="experiencia" className="scroll-mt-[180px] max-[767px]:scroll-mt-[80px]">
        <ExperienciaFormacion />
      </section>
    </div>
  );
}

export default Inicio;
