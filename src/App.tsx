import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        backgroundImage: "radial-gradient(#ccc 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <Navbar />
      <Hero />
      {/* Organized by */}
      {/* Sponsors */}
      {/* Organisers */}
      {/* Testimonials */}
      {/* Register now */}
      {/* Meet the team */}
      {/* Experiences */}
      {/* Memories */}
      {/* Footer */}
    </div>
  );
};

export default App;
