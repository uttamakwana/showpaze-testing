// components
import { Header, Main, Sidebar } from "./components";
// css
import "./App.css";
import { IoCloseCircle } from "react-icons/io5";

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}
const App = () => {
  return (
    <main className="app">
      <Header />
      <div className="container app-main">
        <Sidebar />
        <Main />
      </div>
      <div className="overlay">
        <IoCloseCircle onClick={closeSidebar} />
      </div>
    </main>
  );
};

export default App;
