import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Welcome to MyClassroom 📚</h1>
        <p>Your interactive platform for managing classes, students, and resources.</p>
        <div className="welcome-buttons">
          <Link to="/register" className="btn btn-primary">Get Started</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
