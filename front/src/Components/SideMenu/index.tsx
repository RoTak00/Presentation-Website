import { useState } from "react";
import "./styles.css";

type Props = {
  children?: React.ReactNode;
};

const SideMenu: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sideMenuClasses, setSideMenuClasses] =
    useState<string>("side-menu--closed");

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
    if (!isOpen) {
      setSideMenuClasses("side-menu--opening");
      setTimeout(() => {
        setIsOpen(true);
        setSideMenuClasses("side-menu--opened");
      }, 400);
      return;
    }

    setSideMenuClasses("side-menu--closing");
    setTimeout(() => {
      setIsOpen(false);
      setSideMenuClasses("side-menu--closed");
    }, 400);
  };

  const handleDismiss = () => {
    setSideMenuClasses("side-menu--closing");
    setTimeout(() => {
      setIsOpen(false);
      setSideMenuClasses("side-menu--closed");
    }, 400);
  };
  return (
    <>
      <div
        className={
          "side-menu-button " +
          (sideMenuClasses === "side-menu--opening" ||
          sideMenuClasses === "side-menu--opened"
            ? "side-menu-button--open"
            : "side-menu-button--closed")
        }
        onClick={handleClick}
      >
        <img src="/images/icons/menu.png" alt="menu" />
      </div>

      <>
        {isOpen ? (
          <div className="side-menu-backdrop" onClick={handleDismiss}></div>
        ) : null}

        <div className={"side-menu " + sideMenuClasses}>
          {links.map((link) => (
            <a key={link.name} href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
      </>
    </>
  );
};

export default SideMenu;
