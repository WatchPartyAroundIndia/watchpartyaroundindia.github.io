import Header from "./components/Header";
import Hero from "./components/Hero";
import Organisers from "./components/Organisers";
import PanelDiscussion from "./components/PanelDiscussion";
import RegisterEvent from "./components/RegisterEvent";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Support from "./components/Support";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Organisers />
      <Speakers />
      <PanelDiscussion />
      <Schedule />
      <RegisterEvent />
      <Support />
      <About />
    </>
  );
};

export default App;
