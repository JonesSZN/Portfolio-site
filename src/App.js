import "./App.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Offerings } from "./Offerings";
import { Projects } from "./Projects";
import { Testimonials } from "./Testimonials";
import { Blog } from "./Blog";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      <Offerings />
      <Projects />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
