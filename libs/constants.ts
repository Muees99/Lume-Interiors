import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "home", label: "Home" },
  { id: 2, link: "service", label: "Service" },
  { id: 3, link: "project", label: "Project" },
  // { id: 4, link: "Pages", label: "Pages" },
  { id: 4, link: "news", label: "News" },
  { id: 5, link: "contact", label: "Contact" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: "", label: "about us" },
    { id: 2, link: " tel:", label: "our mission" },
    { id: 3, link: "", label: "career" },
    { id: 4, link: "", label: "contact" },
  ],
  services: [
    { id: 1, link: "", label: "advocacy" },
    { id: 2, link: "", label: "education" },
    { id: 3, link: "", label: "care" },
  ],
  resources: [
    { id: 1, link: "", label: "blog" },
    { id: 2, link: "", label: "FAQ" },
    { id: 3, link: "", label: "support" },
  ],
  link: "",
  label: "",
};
