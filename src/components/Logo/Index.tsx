import parse from "html-react-parser";
import useImage from '../../hooks/useImage';

// import "./Style.scss";

export type LogoProps = {
  type: string; // "text" or "img"
  className: string;
  title: string;
  href: string;
  src?: string;
};

export function Logo({ type, className, title, href, src }: LogoProps) {
  const { image } = useImage(src ? src : '');
  return (
    <a className={className} href={href}>
      {type === "text" ? (
        parse(title)
      ) : (
        image !== null && (
          <img src={image} alt={title} />
        )    
      )}
    </a>
  );
}
