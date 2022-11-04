import ContextMenu from "./ContextMenu";
import "./menu.css";

const Menu = () => {
  return (
    <div className="wrapper">
      <ul id="Contextmenu" className="Contextmenuarea">
        <li id="ontextmenu1" className="Contextmenu1">
          Home
          <ContextMenu targetId="ontextmenu1" options={["Home"]} />
        </li>
        <li id="ontextmenu2" className="Contextmenu2">
          About Us
          <ContextMenu targetId="ontextmenu2" options={["About us"]} />
        </li>
        <li id="ontextmenu3" className="Contextmenu3">
          Servicies
          <ContextMenu targetId="ontextmenu3" options={["Servicies"]} />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
