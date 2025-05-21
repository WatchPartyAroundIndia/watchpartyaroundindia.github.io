import Header from "./components/Header";
import Hero from "./components/Hero";
import Organisers from "./components/Organisers";
import Speakers from "./components/Speakers";
import PanelDiscussion from "./components/PanelDiscussion";
import Schedule from "./components/Schedule";
import RegisterEvent from "./components/RegisterEvent";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Organisers />
      <Speakers />
      <PanelDiscussion />
      <Schedule />
      <RegisterEvent />
      <About />
    </div>
  );
};

export default App;
