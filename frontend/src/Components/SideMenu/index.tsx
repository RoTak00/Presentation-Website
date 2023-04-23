import "./styles.css";

type Props = {
  handleMouseOut?: () => void;
  locked: boolean;
};

const SideMenu: React.FC<Props> = ({ handleMouseOut, locked }) => {
  const menuItems = ["blog", "about", "other"];

  const menuItemsTSX = menuItems.map((el) => <li>{el}</li>);
  return (
    <div
      className={"wrapper " + (locked ? "locked" : "")}
      onMouseLeave={handleMouseOut}
    >
      <ul>{menuItemsTSX}</ul>
    </div>
  );
};

export default SideMenu;
