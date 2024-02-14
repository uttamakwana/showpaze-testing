// css
import "./sidebar.css";
// icons
import { LogoutIcon, DownIcon, UpIcon } from "../../constants/icons";
import { useState } from "react";

const Sidebar = () => {
  const [dropdowns, setDropdowns] = useState({
    events: {
      items: [
        { value: "New Requests", active: false },
        { value: "Estimate", active: false },
        { value: "Events", active: false },
        { value: "Partial Requests", active: false },
      ],
      active: true,
    },
    users: {
      items: [
        { value: "Admins", active: false },
        { value: "Clients", active: false },
        { value: "Coordinators", active: false },
      ],
      active: false,
    },
  });

  const toggleDropdown = (dropdownKey) => {
    setDropdowns((prevDropdowns) => {
      const updatedDropdowns = Object.keys(prevDropdowns).reduce((acc, key) => {
        acc[key] = {
          ...prevDropdowns[key],
          active: key === dropdownKey ? !prevDropdowns[key].active : false,
        };
        return acc;
      }, {});
      return updatedDropdowns;
    });
  };

  const toggleDropdownItem = (e, dropdownKey, index) => {
    e.stopPropagation();
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdownKey]: {
        ...prevDropdowns[dropdownKey],
        items: prevDropdowns[dropdownKey].items.map((item, i) => ({
          ...item,
          active: i === index ? !item.active : false,
        })),
      },
    }));
  };

  const renderDropdown = (dropdownKey, items) => {
    return (
      dropdowns[dropdownKey].active && (
        <div className="dropdown">
          <ul className="dropdown-list">
            {items?.map((item, index) => (
              <li
                key={index}
                className={`dropdown-list-item p-8 ${
                  item.active ? "neon" : ""
                }`}
                onClick={(e) => toggleDropdownItem(e, dropdownKey, index)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      )
    );
  };

  return (
    <aside className="sidebar p-1 br-5">
      {/* Navlist */}
      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          onClick={() => toggleDropdown("events")}
        >
          <div className="sidebar-list-item-link flex-between p-1 br-5">
            <span className={`${dropdowns.events.active ? "neon" : ""}`}>
              Events
            </span>
            {dropdowns.events.active ? <UpIcon /> : <DownIcon />}
          </div>
          {renderDropdown("events", dropdowns.events.items)}
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
            <span className={`${dropdowns.users.active ? "neon" : ""}`}>
              Users
            </span>
            {dropdowns.users.active ? <UpIcon /> : <DownIcon />}
          </div>
          {renderDropdown("users", dropdowns.users.items)}
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
