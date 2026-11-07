import { useState } from "react";
import "./App.css";

const users = [
  { id: 1, name: "Asha", role: "Designer" },
  { id: 2, name: "Ravi", role: "Developer" },
  { id: 3, name: "Meera", role: "Manager" },
];

function ProfileCard({ name, role }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <button onClick={() => setLikes(likes + 1)}>
        Like ({likes})
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Our Team</h1>
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          name={user.name}
          role={user.role}
        />
      ))}
    </div>
  );
}

export default App;
