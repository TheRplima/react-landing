import { HeaderProps } from "../components/Header/Index";
import { SectionProps } from "../components/Section/Index";
import { FooterProps } from "../components/Footer/Index";

import { HeroProps } from "../components/Hero/Index";
import { ServicesProps } from "../components/Services/Index";
import { TestimonialsProps } from "../components/Testimonials/Index";
import { ContactProps } from "../components/Contact/Index";

import homeImg from "../assets/images/home.jpg";
import aboutImg from "../assets/images/about.jpg";
import foto1 from "../assets/fotos/10.jpeg";
import foto2 from "../assets/fotos/56.jpeg";
import foto3 from "../assets/fotos/26.jpeg";

export const sections:SectionProps[] = [
  {
    id: "home",
    title: "Home",
    grid: true,
    nav: "#home",
    content: {
      model: "Hero",
      image: {
        src: homeImg,
        alt: "Personal trainer ajudando mulher a treinar com barra",
      },
      text: {
        title: "Construa seu melhor corpo",
        paragraphs: [
          "Aproveite todas as vantagens de ter um personal trainer capacitado para te oferecer o melhor do treinamento personalizado.",
        ],
        button: {
          label: "Agendar um horário",
          onclick: "#",
        },
      },
    } as HeroProps,
  },
  {
    id: "about",
    title: "Sobre",
    grid: true,
    nav: "#about",
    content: {
      model: "Hero",
      image: {
        src: aboutImg,
        alt: "Personal trainer auxiliando senhor no treinamento",
      },
      text: {
        title: "SEJA BEM VINDO!",
        paragraphs: [
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus deleniti perferendis vel molestiae soluta, quaerat beatae dicta ducimus praesentium architecto harum dolorum distinctio illo earum assumenda itaque. Omnis, quam repellat.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illum ratione impedit quae eum quis adipisci asperiores, est doloribus distinctio excepturi minima eius dolore! Perferendis laborum illo aspernatur repellendus ipsum.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed exercitationem, illum sapiente quasi hic iusto odio maiores esse quaerat quis necessitatibus at odit, dolores dicta, officia ab quos. Provident, quae.",
        ],
        button: false,
      },
    } as HeroProps,
  },
  {
    id: "services",
    title: "Serviços",
    grid: true,
    nav: "#services",
    content: {
      model: "Services",
      title: "Serviços",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus deleniti perferendis vel molestiae soluta, quaerat beatae dicta ducimus praesentium architecto harum dolorum distinctio illo earum assumenda itaque. Omnis, quam repellat.",
      cards: [
        {image: "fa-heart-pulse", title: "Avaliação física", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
        {image: "fa-dumbbell", title: "Treinamento personalizado", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
        {image: "fa-ranking-star", title: "Consultoria online", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
      ]
    } as ServicesProps,
  },
  {
    id: "testimonials",
    title: "Depoimentos",
    grid: false,
    nav: "#testimonials",
    content: {
      model: "Testimonials",
      title: "Depoimentos",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus deleniti perferendis vel molestiae soluta, quaerat beatae dicta ducimus praesentium architecto harum dolorum distinctio illo earum assumenda itaque. Omnis, quam repellat.",
      testimonials: [
        {avatar: foto1, name: "Wanessa Souza", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
        {avatar: foto2, name: "Franciele Venega", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
        {avatar: foto3, name: "Valeska Fabris", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
        {avatar: foto1, name: "Wanessa Souza", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
        {avatar: foto2, name: "Franciele Venega", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
        {avatar: foto3, name: "Valeska Fabris", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio neque blanditiis, dolorem aperiam nulla explicabo asperiores"},
      ]
    } as TestimonialsProps
  },
  {
    id: "contact",
    title: "Contato",
    grid: true,
    nav: "#contact",
    content: {
      model: "Contact",
      text: {
        title: "Entre em contato!",
        paragraphs: [
          "Entre em contato comigo, tire suas dúvidas, ou deixe suas críticas e sugestões."
        ],
        button: {
          label: "Entrar em contato",
          onclick: "https://api.whatsapp.com/send?phone=+5511998456754&text=Oi! Gostaria de agendar um horário",
        },
      },
      info: {
        phone: "11 99845-6754",
        address: "R. Amauri Souza, 346",
        email: "contato@adautorezendepersonal.com",
      }
    } as ContactProps,
  },
]

export const header:HeaderProps = {
  logo: {
    type: "text",
    className: "logo",
    title: "adautorezende<span>personal</span>.",
    href: "/",
  },
  menuItems: sections.filter(({title,nav}) => {
    if (typeof(title) !== "boolean" && typeof(nav) !== "boolean"){
      return true;
    }
    return false;
  }).map(({title,nav}) => {
    return {title:title as string,href:nav as string};
  })
}

export const footer:FooterProps = {
  brand: {
    logo:  {
      type: "text",
      className: "logo logo-alt",
      title: "adautorezende<span>personal</span>.",
      href: "/",
    },
    copyTo: "©2022 adautorezendepersonal.com.",
    copy: "Todos os direitos reservados."
  },
  social: [
    {icon:"instagram", href:"https://instagram.com"},
    {icon:"facebook", href:"https://facebook.com"},
    {icon:"youtube", href:"https://youtube.com"},
  ]
};