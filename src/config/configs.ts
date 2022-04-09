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
        alt: "Computer screen with some weird code",
      },
      text: {
        title: "Hi, Im Rodrigo Lima",
        paragraphs: [
          "I help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and coffee, I turn your requirements into CMS-ified and ecommerce-ified websites - on time and on budget.",
          "Got any questions?"
        ],
        button: {
          label: "Contact me.",
          onclick: "https://api.whatsapp.com/send?phone=+5535998094996&text=",
        },
      },
    } as HeroProps,
  },
  {
    id: "about",
    title: "About",
    grid: true,
    nav: "#about",
    content: {
      model: "Hero",
      image: {
        src: aboutImg,
        alt: "Personal trainer auxiliando senhor no treinamento",
      },
      text: {
        title: "Me, Myself and I",
        paragraphs: [
          "Since Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as standards of the current web I've been passionate about web.",
          "For over a decade I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.",
          "I currently work remotely with a selected freelance client base being open for new opportunities.",
        ],
        button: false,
      },
    } as HeroProps,
  },
  {
    id: "testimonials",
    title: "Testimonials",
    grid: false,
    nav: "#testimonials",
    content: {
      model: "Testimonials",
      title: "Testimonials",
      subtitle: "People I've worked with have said some nice things...",
      testimonials: [
        {avatar: foto1, name: "David Janssens", text: "Rodrigo has consistently contributed well-written and clean code to the ImpressCMS project. He also has a very extensive knowledge of the system, and helped us fixed a great number of bugs."},
        {avatar: foto2, name: "Vaughan Montgomery", text: "I have had the pleasure of working alongside Rodrigo on a number of projects. I have always found him to be very knowledgeable and resourceful. He is always improving his skills and is always willing to learn. He has the ability to be a good mentor & is an invaluable member of our development team. I would not hesitate to recommend him to anyone."},
        {avatar: foto3, name: "Niels Drost", text: "Rodrigo is an excellent worker. At times I even saw Rodrigo make brilliant solutions that I didn't even think of being possible. At our project we've even managed to transfer a part of the page generation and our other modules to our internal FrameWork with the help of Rodrigo. I'd recommend Rodrigo without a doubt."},
        {avatar: foto1, name: "David Janssens", text: "Rodrigo has consistently contributed well-written and clean code to the ImpressCMS project. He also has a very extensive knowledge of the system, and helped us fixed a great number of bugs."},
        {avatar: foto2, name: "Vaughan Montgomery", text: "I have had the pleasure of working alongside Rodrigo on a number of projects. I have always found him to be very knowledgeable and resourceful. He is always improving his skills and is always willing to learn. He has the ability to be a good mentor & is an invaluable member of our development team. I would not hesitate to recommend him to anyone."},
        {avatar: foto3, name: "Niels Drost", text: "Rodrigo is an excellent worker. At times I even saw Rodrigo make brilliant solutions that I didn't even think of being possible. At our project we've even managed to transfer a part of the page generation and our other modules to our internal FrameWork with the help of Rodrigo. I'd recommend Rodrigo without a doubt."},
      ]
    } as TestimonialsProps
  },
  {
    id: "contact",
    title: "Contact me",
    grid: true,
    nav: "#contact",
    content: {
      model: "Contact",
      text: {
        title: "Contact me",
        paragraphs: [
          "I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don't hesitate to get in touch."
        ],
        button: {
          label: "Contact",
          onclick: "https://api.whatsapp.com/send?phone=+5535998094996&text=",
        },
      },
      info: {
        phone: "35 99809-4996",
        address: "R. Afonso Pena, 241 - Monte Santo de Minas",
        email: "therplima@gmail.com",
      }
    } as ContactProps,
  },
]

export const header:HeaderProps = {
  logo: {
    type: "text",
    className: "logo",
    title: "rodrigo<span>lima</span>.io",
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
      title: "rodrigo<span>lima</span>.io",
      href: "/",
    },
    copyTo: "©2022 rodrigolima.io",
    copy: "All rights reserved."
  },
  social: [
    {icon:"github", href:"https://github.com/TheRplima"},
    {icon:"linkedin", href:"https://www.linkedin.com/in/therplima"},
    {icon:"twitter", href:"https://twitter.com/rod_lima2505"},
  ]
};