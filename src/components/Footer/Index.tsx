import { Logo, LogoProps } from "../Logo/Index";
import Icon from "../Icon/Index";

// import "./Style.scss";

export type FooterProps = {
  brand: {
    logo: LogoProps;
    copyTo: string;
    copy: string;
  };
  social: {href: string; icon: string;}[] | boolean;
};

export function Footer({ brand, social }: FooterProps) {
  const logo = brand.logo;
    return (
    <footer className="section">
      <div className="container grid">
        <div className="brand">
          <Logo {...logo} />
          <p>{brand.copyTo}</p>
          <p>{brand.copy}</p>
        </div>
        {typeof(social) !== "boolean" && (
          <div className="social grid">
            {social.map(({href,icon},index) => (
              <a key={index} href={href} target="_blank" rel="noreferrer">
                <Icon icon={icon} size={"1.5rem"} className="icon"/>
              </a>
            ))}
        </div>
        )}
      </div>
    </footer>
  );
}
