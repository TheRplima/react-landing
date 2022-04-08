import { Hero, HeroProps } from "../Hero/Index";
import { Services, ServicesProps } from "../Services/Index";
import { Testimonials, TestimonialsProps } from "../Testimonials/Index";
import { Contact, ContactProps } from "../Contact/Index";
import { Divider } from "../Divider/Index";

// import "./Style.scss";

export type SectionProps = {
  id: string;
  title: string | boolean;
  grid: boolean;
  nav: string | boolean;
  content: HeroProps | ServicesProps | TestimonialsProps | ContactProps | boolean;
  divider?: number;
};

export function Section({
  id,
  grid,
  content,
  divider,
  ...props
}: SectionProps) {
  
  return (
    <>
    {typeof(content) !== "boolean" && typeof(content.model) !== "undefined" && (
      <>
        <section className="section" id={id}>
          <div className={`container${grid ? " grid" : ""}`}>
            {content.model === "Hero" && (
              <Hero {...content as HeroProps} />
            )}
            {content.model === "Services" && (
              <Services {...content as ServicesProps} />
            )}
            {content.model === "Testimonials" && (
              <Testimonials {...content as TestimonialsProps} />
            )}
            {content.model === "Contact" && (
              <Contact {...content as ContactProps} />
            )}
          </div>
        </section>
        <Divider type={divider} />
      </>
    )}
    </>
  );
}
