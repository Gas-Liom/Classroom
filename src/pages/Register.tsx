import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Surname" required />
        <input type="text" placeholder="Middle Name" />
        <input type="text" placeholder="Registration Number" required />
        <input type="text" placeholder="Level of Class" required />
        <input type="text" placeholder="Class Teacher" required />
        <input type="number" placeholder="Age" required />
        <input type="date" placeholder="Date of Birth" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Village" required />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
