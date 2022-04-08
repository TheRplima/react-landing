import parse from "html-react-parser";

// import "./Style.scss";

export type LogoProps = {
  type: string; // "text" or "img"
  className: string;
  title: string;
  href: string;
  src?: string;
};

export function Logo({ type, className, title, href, src }: LogoProps) {
  return (
    <a className={className} href={href}>
      {type === "text" ? (
        parse(title)
      ) : (
        <img src={src} alt={title} />
      )}
    </a>
  );
}
