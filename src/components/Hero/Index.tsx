// import "./Style.scss";
// import useImage from '../../hooks/useImage';
import { Button } from "../Button/Index";
import { Title } from "../Title/Index";

export type HeroProps = {
  model: string;
  image: {
    src: string;
    alt: string;
  } | boolean;
  text: {
    title: string | boolean;
    paragraphs: string[] | boolean;
    button: {
      label: string;
      onclick: string;
    } | boolean;
  } | boolean;
};

export function Hero({ ...props }: HeroProps) {
  const imageSrc = typeof(props.image) !== "boolean" && typeof(props.image.src) !== 'undefined' ? require(`../../assets/${props.image.src}`) : '';
  const imageAlt = typeof(props.image) !== "boolean" && typeof(props.image.alt) !== 'undefined' ? props.image.alt : '';
  const hasText = typeof(props.text) !== "boolean" ? true : false;
  const title = typeof(props.text) !== "boolean" && typeof(props.text.title) !== "boolean" ? props.text.title : false;
  const paragraphs = typeof(props.text) !== "boolean" && typeof(props.text.paragraphs) !== "boolean" ? props.text.paragraphs : false;
  const hasButton = typeof(props.text) !== "boolean" && typeof(props.text.button) !== "boolean" ? true : false;
  const buttonLabel = typeof(props.text) !== "boolean" && typeof(props.text.button) !== "boolean" ? props.text.button.label : '';
  const buttonOnclick = typeof(props.text) !== "boolean" && typeof(props.text.button) !== "boolean" ? props.text.button.onclick : '';
  return (
    <> 
      {imageSrc && (
        <div className="image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
      {hasText && (
        <div className="text">
          {title && (
            <Title size={2}>{title}</Title>
          )}
          {paragraphs && (paragraphs.map((paragraph, index) => (<p key={index}>{paragraph}</p>)))}
          {hasButton && (
            <Button onClick={() => {window.location.href = buttonOnclick;}}>{buttonLabel}</Button>
          )}
        </div>
      )}
    </>
  );
}
