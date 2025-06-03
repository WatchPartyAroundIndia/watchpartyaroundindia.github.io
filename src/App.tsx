import ConnectWithTeam from "./components/connect-with-team";
import Experiences from "./components/experiences";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MeetTheTeam from "./components/meet-the-team";
import Memories from "./components/memories";
import Navbar from "./components/navbar";
import OrganizedBy from "./components/organized-by";
import RegisterNow from "./components/register-now";
import Sponsors from "./components/sponsors";
import Testimonials from "./components/testimonials";

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
      <MeetTheTeam />
      <Testimonials />
      <Memories />
      <Footer />
    </div>
  );
};

export default App;
