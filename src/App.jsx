import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import StoryDescription from "./sections/StoryDescription";
import FirstVideo from "./sections/FirstVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <StoryDescription />
      <FirstVideo />
    </main>
  );
};

export default App;
