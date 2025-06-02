import ConnectWithTeam from "./components/connect-with-team";
import Experiences from "./components/experiences";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import OrganizedBy from "./components/organized-by";
import RegisterNow from "./components/register-now";
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
      <ConnectWithTeam />
      <Experiences />
      <RegisterNow />
      {/* Meet the team */}
      {/* Experiences */}
      {/* Memories */}
      {/* Footer */}
    </div>
  );
};

export default App;
