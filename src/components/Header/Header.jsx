// css
import "./header.css";
// icons
import { BellIcon, InfoIcon, MenuIcon } from "../../constants/icons.js";
// images
import { avatarImage } from "../../constants/images.js";

function openSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  console.log(sidebar);
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  }
}

const Header = () => {
  return (
    <header className="header">
      <main className="container main-header">
        {/* Info Icon */}
        <div className="main-header-icon info-icon-container">
          <InfoIcon />
        </div>
        {/* Bell Icon */}
        <div className="main-header-icon bell-icon-container relative">
          <BellIcon />
          <span className="bell-icon-dot circle absolute"></span>
        </div>
        {/* Header Text */}
        <div className="main-header-text">
          <p>
            Hi, <span className="accent-text fw-500">Muhammad Asad</span>
          </p>
          <p>Welcome Back!</p>
        </div>
        {/* Header Avatar */}
        <div className="main-header-avatar">
          <img src={avatarImage} alt="avatar" className="circle w-100 h-100" />
        </div>
        {/* Menu Icon */}
        <MenuIcon className="menu-icon" onClick={openSidebar} />
      </main>
    </header>
  );
};

export default Header;
