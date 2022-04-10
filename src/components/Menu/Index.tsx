// import "./Style.scss";
export type MenuItemProps = {
  title: string;
  href: string;
};

type MenuProps = {
  items: MenuItemProps[];
};

export function Menu({ items }: MenuProps) {
  return (
    <>
      <div className="menu">
        <ul className="grid">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a className="title" href={item.href}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div> 
    </>
  );
}
