import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  const username = "Student"; // replace with real logged-in user

  return (
    <div className="layout">
      <Sidebar />
      <section className="content">
        <h2>Welcome, {username} 👋</h2>
        <p>This is your dashboard.</p>
      </section>
    </div>
  );
};

export default Home;
