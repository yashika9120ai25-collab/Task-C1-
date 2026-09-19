import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Tutorials from "./components/Tutorials";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-serif">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Tutorials />
        <Gallery />
        <Newsletter />
      </main>

      <Footer />

    </div>
  );
}

export default App;