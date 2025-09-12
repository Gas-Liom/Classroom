import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    middlename: "",
    email: "",
    regnumber: "",
    level_of_class: "",
    class_assigned: "",
    role: "student",
    age: "",
    dateofbirth: "",
    village: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Registration failed");
      const data = await res.json();

      alert("✅ Registration successful!");
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/login");
    } catch (err) {
      console.error("❌ Registration error:", err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="firstname" placeholder="First Name" required onChange={handleChange} />
        <input type="text" name="surname" placeholder="Surname" required onChange={handleChange} />
        <input type="text" name="middlename" placeholder="Middle Name" onChange={handleChange} />

        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        {/* Student fields */}
        {formData.role === "student" && (
          <>
            <input type="text" name="regnumber" placeholder="Registration Number" required onChange={handleChange} />
            <input type="text" name="level_of_class" placeholder="Level of Class" required onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" required onChange={handleChange} />
            <input type="date" name="dateofbirth" required onChange={handleChange} />
            <input type="text" name="village" placeholder="Village" required onChange={handleChange} />
          </>
        )}

        {/* Teacher fields */}
        {formData.role === "teacher" && (
          <>
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="text" name="class_assigned" placeholder="Class Assigned" required onChange={handleChange} />
          </>
        )}

        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
