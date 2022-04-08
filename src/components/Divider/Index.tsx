// import "./Style.scss";

type DividerProps = {
  type?: number;
};

export function Divider({ type = 1, ...props }: DividerProps) {
  return <div className={`divider-${type}`} {...props}></div>;
}
