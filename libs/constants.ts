import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "home", label: "Home" },
  { id: 2, link: "service", label: "Service" },
  { id: 3, link: "projects", label: "Projects" },
  // { id: 4, link: "Pages", label: "Pages" },
  { id: 4, link: "news", label: "News" },
  { id: 5, link: "contact", label: "Contact" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  ourServices: [
    { id: 1, link: "", label: "architecture" },
    { id: 2, link: " tel:", label: "Interior Design" },
    { id: 3, link: "", label: "Home Decor" },
    { id: 4, link: "", label: "Urban Design" },
    { id: 5, link: "", label: "Design System" },
  ],
  
  link: "",
  label: "",
};
