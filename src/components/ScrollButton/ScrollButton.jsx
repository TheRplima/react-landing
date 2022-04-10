import React, { useState } from 'react';
import Icon from "../Icon/Index";

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
        in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className={`back-to-top ${visible ? " show" : ""}`}>
      <Icon icon="arrow-up" onClick={scrollToTop} size={"1.5rem"} />
    </div>

  );
}

export default ScrollButton;
