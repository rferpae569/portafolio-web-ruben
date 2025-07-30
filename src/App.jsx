import Cabecera from "./components/Cabecera";
import Footer from "./components/Pie";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecera />
      <main className="flex-grow pt-[180px]">
        <section id="inicio">
          <Inicio />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

