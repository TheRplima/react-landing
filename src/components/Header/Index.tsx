import React, { useState } from "react"
import { Menu, MenuItemProps } from "../Menu/Index";
import { Logo, LogoProps } from "../Logo/Index";
import Icon from "../Icon/Index";
// import "./Style.scss";

export type HeaderProps = {
  logo: LogoProps;
  menuItems: MenuItemProps[];
};

export function Header({ logo, menuItems }: HeaderProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <header id="header">
      <nav className={`container ${navbarOpen ? " show" : ""}`}>
        <Logo {...logo} />
        <Menu items={menuItems} />
        <div className="toggle icon-menu"><Icon icon="menu" onClick={handleToggle} size={"1.5rem"}/></div>
        <div className="toggle icon-close"><Icon icon="close" onClick={handleToggle} size={"1.5rem"}/></div>
      </nav>
    </header>
  );
}
