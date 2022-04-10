// import "./Style.scss";
import { useEffect, useState } from 'react'
export type MenuItemProps = {
  title: string;
  href: string;
};

type MenuProps = {
  items: MenuItemProps[];
};

type sectionPositionType = {
  id: string;
  startPostion: number;
  endPostion: number;
}

export function Menu({ items }: MenuProps) {
  const [ scrolled, setScrolled ] = useState('');

  useEffect( () => {
    const sectionsOffsetTop:sectionPositionType[] = items.map(({href}) => href ).map((section) => {
      const sectionElement = document.getElementById(section.substring(1));
      const startPostion = sectionElement ? sectionElement.offsetTop - 100 : 0 ;
      return {
        id: section,
        startPostion: startPostion > 0 ? startPostion : 0,
        endPostion: sectionElement ? (startPostion + sectionElement.offsetHeight) : 0,
      } 
    });

    const handleScroll = () => { 
      let activeSection = sectionsOffsetTop.filter((section) => {
        if (section.startPostion < window.pageYOffset && window.pageYOffset < section.endPostion){
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
                <a className={(scrolled === '' && item.href === '#home') || (scrolled === item.href) ? "title active" : "title"} href={item.href}>
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
