import { useState } from "react";
import "./index.css";
import RoleCard from "./components/RoleCard";

const roles = [
  {
    title: "Frontend Developer",
    icon: "💻",
    skills: "React • JavaScript • HTML • CSS",
  },
  {
    title: "Java Developer",
    icon: "☕",
    skills: "Java • Spring • SQL • OOP",
  },
  {
    title: "Python Developer",
    icon: "🐍",
    skills: "Python • APIs • DSA",
  },
  {
    title: "QA Engineer",
    icon: "🧪",
    skills: "Testing • SQL • API • Selenium",
  },
  {
    title: "Data Analyst",
    icon: "📊",
    skills: "Excel • SQL • Python",
  },
];

export default function App() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="app">
      <nav className="navbar">
        <h2>HireMind AI</h2>

        <button className="nav-btn">
          Get Started
        </button>
      </nav>

      <section className="hero">
        <span className="tag">
          AI Interview Platform
        </span>

        <h1>
          Practice. Perform.
          <br />
          Get Hired.
        </h1>

        <p>
          Experience realistic mock interviews with AI, solve coding challenges,
          and receive personalized feedback to prepare for your dream job.
        </p>

        <button className="cta">
          {selectedRole
            ? `Start ${selectedRole} Interview`
            : "Start Interview"}
        </button>
      </section>

      <section className="roles">
        <h2>Choose Your Interview Role</h2>

        <p>
          Select a role to begin your personalized AI interview experience.
        </p>

        <div className="role-grid">
          {roles.map((role) => (
            <RoleCard
              key={role.title}
              role={role}
              selected={selectedRole === role.title}
              onSelect={setSelectedRole}
            />
          ))}
        </div>
      </section>
    </div>
  );
}