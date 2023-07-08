import { useState } from "react";
import "./styles.css";

type Props = {};

const SideMenu: React.FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default SideMenu;
