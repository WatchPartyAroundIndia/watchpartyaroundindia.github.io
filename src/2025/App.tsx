import Speakers from "./components/speaker";
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
    <div className="min-h-screen bg-white bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-[length:20px_20px]">
      <Navbar />
      <Hero />
      <OrganizedBy />
      <Sponsors />
      <ConnectWithTeam />
      <Experiences />
      <RegisterNow />
      <Speakers />
      <MeetTheTeam />
      <Testimonials />
      <Memories />
      <Footer />
    </div>
  );
};

export default App;
