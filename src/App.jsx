import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Hero />
      <Benefits />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
