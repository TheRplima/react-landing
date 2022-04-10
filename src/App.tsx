import { Fade } from "react-awesome-reveal";

import { Header, HeaderProps } from "./components/Header/Index";
import { Section, SectionProps } from "./components/Section/Index";
import { Footer, FooterProps } from "./components/Footer/Index";
import ScrollButton from "./components/ScrollButton/ScrollButton";

import configs from "./config/configs.json";

const header:HeaderProps = configs.header;
const sections:SectionProps[] = configs.sections;
const footer:FooterProps = configs.footer;

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
      <ScrollButton />
    </>
  );
}

export default App;
