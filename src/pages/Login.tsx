import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form">
        <input type="text" placeholder="Registration Number" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
