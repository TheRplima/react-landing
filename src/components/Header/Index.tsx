import { Menu, MenuItemProps } from "../Menu/Index";
import { Logo, LogoProps } from "../Logo/Index";

// import "./Style.scss";

export type HeaderProps = {
  logo: LogoProps;
  menuItems: MenuItemProps[];
};

export function Header({ logo, menuItems }: HeaderProps) {
  return (
    <header id="header">
      <nav className="container">
        <Logo {...logo} />
        <Menu items={menuItems} />
      </nav>
    </header>
  );
}
