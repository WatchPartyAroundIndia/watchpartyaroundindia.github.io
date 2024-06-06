import Header from "./components/Header";
import Hero from "./components/Hero";
import Organisers from "./components/Organisers";
import Speakers from "./components/Speakers";
import PanelDiscussion from "./components/PanelDiscussion";
import Schedule from "./components/Schedule";
import RegisterEvent from "./components/RegisterEvent";
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
