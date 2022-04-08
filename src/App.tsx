import { Header } from "./components/Header/Index";
import { Section } from "./components/Section/Index";
import { Footer } from "./components/Footer/Index";

import { sections, header, footer } from "./config/configs";

import { Fade } from "react-awesome-reveal";

function App() { 
  return (
    <>
      <Header {...header} />
      <main>
        {sections.map((section, index) => {
          return (
            <Fade key={index} cascade delay={1.5}>
              <Section {...section} divider={index % 2 === 0 ? 1 : 2} />
            </Fade>
          );
        })}
      </main>
      <Footer {...footer} />
    </>
  );
}

export default App;
