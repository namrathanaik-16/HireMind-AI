import "./index.css";
const roles=[
  {
    title:"Frontend Developer",
    icon:"💻",
    skills:"React • JavaScript • HTML • CSS",
  },
  {
    title:"Java Developer",
    icon:"☕",
    skills:"Java • Spring • SQL • OOP",
  },
  {
    title:"Python Developer",
    icon:"🐍",
    skills:"Python • APIs • DSA",
  },
  {
    title:"QA Engineer",
    icon:"🧪",
    skills:"Testing • SQL • API • Selenium",
  },
  {
    title:"Data Analyst",
    icon:"📊",
    skills:"Excel • SQL • Python",
  },
];
export default function App(){
  return(
    <div className="app">
      <nav className="navbar">
        <h2>Hiremind AI</h2>
        <button>Get Started</button>
      </nav>
      <section className="hero">
        <span className="tag">AI Interview Platform</span>
        <h1>Practice. Perform.
          <br />
          Get Hired.
        </h1>
        <p>
          Experience realistic mock interviews with AI, solve coding challenges,
          and recieve personalised feedback to prepare for your dream job.
        </p>
        <button className="cta">Start Interview</button>
      </section>
      <section className="roles">
        <h2>Choose Your Interview Role</h2>
        <p>Select a role to begin your personalised AI interview experience.</p>
        <div className="role-grid">
          {roles.map((role)=>(
            <div className="card" key={role.title}>
              <div className="emoji">{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.skills}</p>
              <button>Select Role</button>
              </div>
          ))}
        </div>
      </section>
    </div>
  );
}
