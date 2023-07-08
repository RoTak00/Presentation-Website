import { useState } from "react";
import "./styles.css";

type Props = {
  children?: React.ReactNode;
};

const SideMenu: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div className="side-menu-button" onClick={handleClick}>
        <img src="/images/icons/menu.png" alt="menu" />
      </div>

      {isOpen ? (
        <div className="side-menu">
          {links.map((link) => (
            <a key={link.name} href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SideMenu;
