import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaClipboard, FaBook, FaCalendarAlt } from "react-icons/fa";

const Teacher: React.FC = () => {
  const [teacherName, setTeacherName] = useState("Teacher");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      if (parsed.role !== "teacher") {
        navigate("/");
      } else {
        setTeacherName(parsed.firstname + " " + parsed.surname);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const cards = [
    { icon: <FaClipboardList />, label: "Manage Attendance" },
    { icon: <FaClipboard />, label: "Create Assessments" },
    { icon: <FaBook />, label: "Manage Subjects" },
    { icon: <FaCalendarAlt />, label: "View Timetable" },
  ];

  return (
    <div className="layout">
      <Sidebar />
      <section className="content">
        <h2 className="dashboard-title">Welcome, {teacherName} 👩‍🏫</h2>
        <div className="cards-container">
          {cards.map((card, idx) => (
            <div key={idx} className="card">
              <div className="card-icon">{card.icon}</div>
              <p className="card-label">{card.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teacher;
