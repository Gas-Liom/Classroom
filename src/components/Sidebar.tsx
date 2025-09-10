import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaClipboardList,
  FaBook,
  FaCalendarAlt,
  FaClipboard,
  FaList,
  FaSignOutAlt
} from "react-icons/fa";

interface MenuItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

const menuItems: MenuItem[] = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Students", path: "/students", icon: <FaUserGraduate /> },
  { name: "Attendance", path: "/attendance", icon: <FaClipboardList /> },
  { name: "Assessments", path: "/assessments", icon: <FaClipboard /> },
  { name: "Timetable", path: "/timetable", icon: <FaList /> },
  { name: "Subjects", path: "/subjects", icon: <FaBook /> },
  { name: "Calendar", path: "/calendar", icon: <FaCalendarAlt /> },
];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      localStorage.removeItem("student");
      navigate("/login");
    }
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? "→" : "←"}
      </button>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="menu-link">
              <span className="icon">{item.icon}</span>
              {!isCollapsed && <span className="text">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
      {/* Logout button always at the bottom */}
      <div className="logout-container">
        <button className="menu-link logout-btn" onClick={handleLogout}>
          <span className="icon"><FaSignOutAlt /></span>
          {!isCollapsed && <span className="text">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
