import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaClipboardList,
  FaBook,
  FaCalendarAlt,
  FaClipboard,
  FaList
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

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? "→" : "←"}
      </button>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="menu-link">
              <span className="icon">{item.icon}</span>
              {!isCollapsed && <span className="text">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
