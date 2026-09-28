import Cabecera from "./components/Cabecera";
import Footer from "./components/Pie";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecera />
      <main className="flex-grow pt-[180px] max-[767px]:pt-[80px]">
        <section id="inicio">
          <Inicio />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

