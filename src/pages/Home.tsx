import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaClipboardList,
  FaClipboard,
  FaList,
  FaBook,
  FaCalendarAlt
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

const Home: React.FC = () => {
  const [username, setUsername] = useState("Student");
  const navigate = useNavigate();

  useEffect(() => {
    const student = localStorage.getItem("student");
    if (student) {
      const parsed = JSON.parse(student);
      setUsername(parsed.firstname + " " + parsed.surname);
    }
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <section className="content">
        <h2>Welcome, {username} 👋</h2>

        <div className="cards-container">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="dashboard-card"
              onClick={() => navigate(item.path)}
            >
              <div className="card-icon">{item.icon}</div>
              <div className="card-name">{item.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
