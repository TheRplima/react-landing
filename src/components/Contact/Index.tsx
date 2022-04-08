// import "./Style.scss";
import Icon from "../Icon/Index";
import { Button } from "../Button/Index";
import { Title } from "../Title/Index";

export type ContactProps = {
  model: string;
  text: {
    title: string | boolean;
    paragraphs: string[] | boolean;
    button: {
      label: string;
      onclick: string;
    } | boolean;
  } | boolean;
  info: {
    phone: string;
    address: string;
    email: string;
  }
};

export function Contact({ text, info }: ContactProps) {
  const hasText = typeof(text) !== "boolean" ? true : false;
  const hasInfo = typeof(info) !== "boolean" ? true : false;
  const title = typeof(text) !== "boolean" && typeof(text.title) !== "boolean" ? text.title : false;
  const paragraphs = typeof(text) !== "boolean" && typeof(text.paragraphs) !== "boolean" ? text.paragraphs : false;
  const hasButton = typeof(text) !== "boolean" && typeof(text.button) !== "boolean" ? true : false;
  const buttonLabel = typeof(text) !== "boolean" && typeof(text.button) !== "boolean" ? text.button.label : '';
  const buttonOnclick = typeof(text) !== "boolean" && typeof(text.button) !== "boolean" ? text.button.onclick : '';
  return (
    <> 
      {hasText && (
          <div className="text">
            {title && (
              <Title size={2}>{title}</Title>
            )}
            {paragraphs && (paragraphs.map((paragraph, index) => {
              return (<p key={index}>{paragraph}</p>);
            }))}
            {hasButton && (
              <Button onClick={() => {window.location.href = buttonOnclick;}}>{buttonLabel}</Button>
            )}
        </div>
      )}
      {hasInfo && (
        <div className="links">
          <ul className="grid">
            <li><Icon icon="phone" size={"1.5rem"} className="icon"/>{info.phone}</li>
            <li><Icon icon="map-pin" size={"1.5rem"} className="icon"/>{info.address}</li>
            <li><Icon icon="mail" size={"1.5rem"} className="icon"/>{info.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}
