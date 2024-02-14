// css
import "./sidebar.css";
// icons
import { LogoutIcon, DownIcon, UpIcon } from "../../constants/icons";
import { useState } from "react";

const Sidebar = () => {
  const dropdownListItem = [
    "New Requests",
    "Estimate",
    "Events",
    "Partial Events",
    "Admins",
    "Clients",
    "Coordinates",
  ];
  const [activeDropdown, setActiveDropdown] = useState({
    events: true,
    users: false,
  });
  const [activeDropdownItem, setActiveDropdownItem] = useState("New Requests");

  console.log(activeDropdown);

  // toggle the dropdown
  function toggleDropdown(dropdown) {
    setActiveDropdown((prev) => {
      return {
        ...prev,
        [dropdown]: !prev[dropdown],
      };
    });
  }

  // function toggle dropdown item
  function toggleDropdownItem(e, item) {
    e.stopPropagation();
    setActiveDropdownItem(item);
  }

  // render dropdown item
  function renderDropdownItems(dropdown) {
    const copyItems = dropdownListItem;
    const items = copyItems.map((item, index) => {
      const listItem = (
        <li
          key={item}
          className={`dropdown-list-item p-8 ${
            activeDropdownItem === item && "neon"
          }`}
          onClick={(e) => toggleDropdownItem(e, item)}
          id={`${item === "Estimate" && "data-estimate"}`}
        >
          {item}
        </li>
      );
      if (dropdown === "events") {
        return index <= 3 && listItem;
      } else {
        return index > 3 && listItem;
      }
    });
    return items;
  }

  return (
    <aside className="sidebar p-1 br-5">
      {/* Navlist */}
      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          onClick={() => toggleDropdown("events")}
        >
          <div className="sidebar-list-item-link flex-between p-1 br-5">
            <span className={`${activeDropdown.events && "neon"}`}>Events</span>
            {activeDropdown.events ? <UpIcon /> : <DownIcon />}
          </div>
          <div className="dropdown">
            <ul className="dropdown-list">
              {activeDropdown.events && renderDropdownItems("events")}
            </ul>
          </div>
        </li>
        <li className="sidebar-list-item-link flex-between p-1 br-5">
          Poistion
        </li>
        <li className="sidebar-list-item-link flex-between p-1 br-5">
          Contractors
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => toggleDropdown("users")}
        >
          <div className="sidebar-list-item-link flex-between p-1 br-5">
            <span className={`${activeDropdown.users && "neon"}`}>Users</span>
            {activeDropdown.users ? <UpIcon /> : <DownIcon />}
          </div>
          <div className="dropdown">
            <ul className="dropdown-list">
              {activeDropdown.users && renderDropdownItems("users")}
            </ul>
          </div>
        </li>
      </ul>
      {/* Logout Button */}
      <button className="sidebar-logout-btn p-1 br-5">
        <LogoutIcon /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
