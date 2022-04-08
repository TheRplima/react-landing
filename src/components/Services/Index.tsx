// import "./Style.scss";
import { Title } from "../Title/Index";

type ServiceCardProps = {
  image: string | boolean;
  title: string | boolean;
  text: string | boolean;
}

export type ServicesProps = {
  model: string;
  title: string | boolean;
  subtitle: string | boolean;
  cards: ServiceCardProps[] | boolean ;
};

export function Services({ title, subtitle, cards }: ServicesProps) {
  return (
    <> 
      <header>
        {typeof(title) !== "boolean" && (
          <Title size={2}>{title}</Title>
        )}
        {typeof(subtitle) !== "boolean" && (
          <p className="subtitle">{subtitle}</p>
        )}
      </header>
      {typeof(cards) !== "boolean" && (
        <div className="cards grid">
          {cards.map((card:ServiceCardProps, index) => (
            <div key={index} className="card">
              {typeof(card.image) !== "boolean" && (
                <i className={`fa-solid ${card.image}`}></i>
              )}
              {typeof(card.title) !== "boolean" && (
                <Title size={3}>{card.title}</Title>
              )}
              {typeof(card.text) !== "boolean" && (
                <p>{card.text}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
