import Hero from "./components/hero";
import Navbar from "./components/navbar";
import OrganizedBy from "./components/organized-by";
import Sponsors from "./components/sponsors";

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
      <OrganizedBy />
      <Sponsors />
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
