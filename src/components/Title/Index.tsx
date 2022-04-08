import parse from "html-react-parser";
// import "./Style.scss";

type TitleProps = {
  size?: number;
  children: string;
};

export function Title({ size = 2, ...props }: TitleProps) {
  return (
    <>{parse(`<h${size} className="title">${props.children}</h${size}>`)}</>
  );
}
