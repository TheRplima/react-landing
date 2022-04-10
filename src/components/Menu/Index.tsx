// import "./Style.scss";
import { useEffect, useState } from 'react'
export type MenuItemProps = {
  title: string;
  href: string;
};

type MenuProps = {
  items: MenuItemProps[];
};

export function Menu({ items }: MenuProps) {
  const [ scrolled, setScrolled ] = useState('');
  useEffect( () => {
    const sections = items.map(({href}) => href );
    const sectionsOffsetTop:{pos:number,id:string}[] = sections.map((section) => {
      const sectionPosition = document.getElementById(section.substring(1))?.offsetTop;
      return {
        pos: sectionPosition ? sectionPosition : 0,
        id: section
      } 
    });

    const handleScroll = () => { 
      let activeSection = sectionsOffsetTop.filter((section) => {
        if (section.pos >= window.pageYOffset - 120 && section.pos <= window.pageYOffset + 120){
          return true;
        }
        return false;
      });
      setScrolled(activeSection[0]?activeSection[0].id:'#home');
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])
  return (
    <>
      <div className="menu">
        <ul className="grid">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a className={`title${scrolled === '' && item.href === '#home'?" active":scrolled === item.href && " active"}`} href={item.href}>
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
